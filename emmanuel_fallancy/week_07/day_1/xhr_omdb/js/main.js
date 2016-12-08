var makeRequestBySearch = function ( moviename ) {
  var link = "http://omdbapi.com?s=" + moviename;
  var response;

  var request = new XMLHttpRequest();
  request.open( "GET", link );
  request.send();

  request.onreadystatechange = function () {
    if ( request.readyState === 4 ) {
      response = JSON.parse( request.responseText );
      console.log( response );

      // Create elements to display results
      showResults( response );
    }
  };
};

var makeRequestByImdbID = function ( imdbid ) {
  var link = "http://omdbapi.com?i=" + imdbid + "&tomatoes=true";
  var response;

  var request = new XMLHttpRequest();
  request.open( "GET", link );
  request.send();

  request.onreadystatechange = function () {
    if ( request.readyState === 4 ) {
      response = JSON.parse( request.responseText );
      console.log( response );

      // Create elements to display results
      showResult( response );
    }
  };
};

var requestResults = function () {
  var moviename = document.querySelector( "#search" ).value;
  makeRequestBySearch( moviename );
};

// This is being used to display result by IMDB ID
var showResult = function ( searchResult ) {
  var moviesFrame = document.querySelector( "#movies" );

  if ( moviesFrame !== null ) {
    moviesFrame.remove();
  }

  moviesFrame = document.createElement( "div" );
  moviesFrame.id = "movies";
  document.body.appendChild( moviesFrame );

  var newline = document.createElement( "br" );

  // Create the div to display the result
  var div = document.createElement( "div" );

  // Poster
  var poster = document.createElement( "img" );
  poster.src = searchResult[ "Poster" ];
  poster.alt = searchResult[ "Title" ];
  div.appendChild( poster );

  // Title
  var title = document.createElement( "p" );
  title.innerHTML = "Title: " + searchResult[ "Title" ];
  div.appendChild( title );

  // Year
  var year = document.createElement( "p" );
  year.innerHTML = "Year: " + searchResult[ "Year" ];
  div.appendChild( year );

  // Plot
  var plot = document.createElement( "p" );
  plot.innerHTML = "Plot: " + searchResult[ "Plot" ];
  div.appendChild( plot );

  // Genre
  var genre = document.createElement( "p" );
  genre.innerHTML = "Genre: " + searchResult[ "Genre" ];
  div.appendChild( genre );

  // Director
  var director = document.createElement( "p" );
  director.innerHTML = "Director: " + searchResult[ "Director" ];
  div.appendChild( director );

  // Movie duration
  var duration = document.createElement( "p" );
  duration.innerHTML = "Movie Runtime: " + searchResult[ "Runtime" ];
  div.appendChild( duration );

  // IMDB rating
  var imdbRating = document.createElement( "p" );
  imdbRating.innerHTML = "IMDB Rating: " + searchResult[ "imdbRating" ];
  div.appendChild( imdbRating );

  // Tomatoes Rating
  var tomatoRating = document.createElement( "p" );
  tomatoRating.innerHTML = "Rotten Tomatoes Rating: " + searchResult[ "tomatoRating" ];
  div.appendChild( tomatoRating );

  // Tomatoes Review
  var tomatoReviews = document.createElement( "p" );
  tomatoReviews.innerHTML = "Rotten Tomatoes Reviews: " + searchResult[ "tomatoReviews" ];
  div.appendChild( tomatoReviews );

  // This will append it to the frame/container for movies
  moviesFrame.appendChild( div );
  moviesFrame.appendChild( newline );

};

// This is being used to display results of search found
var showResults = function ( results ) {
  var moviesFrame = document.querySelector( "#movies" );

  if ( moviesFrame !== null ) {
    moviesFrame.remove();
  }

  moviesFrame = document.createElement( "div" );
  moviesFrame.id = "movies";
  document.body.appendChild( moviesFrame );

  var searchResult = results[ "Search" ];

  for ( var i = 0; i < searchResult.length; i++ ) {
    // Create the div to display the result
    var div = document.createElement( "div" );

    var poster = document.createElement( "img" );
    poster.src = searchResult[ i ][ "Poster" ];
    poster.alt = searchResult[ i ][ "Title" ];
    poster.imdb = searchResult[ i ][ "imdbID" ];
    poster.addEventListener( "click", function () {
      makeRequestByImdbID( this.imdb )
    } );
    div.appendChild( poster );

    var title = document.createElement( "p" );
    title.innerHTML = "Title: " + searchResult[ i ][ "Title" ];
    div.appendChild( title );

    var year = document.createElement( "p" );
    year.innerHTML = "Year: " + searchResult[ i ][ "Year" ];
    div.appendChild( year );

    // This will append it to the frame/container for movies
    moviesFrame.appendChild( div );
  }
};

// Let all of it loaded then add the event listener
window.onload = function () {
  var btn = document.querySelector( "#submit" );
  btn.addEventListener( "click", requestResults );
};
