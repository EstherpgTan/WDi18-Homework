// // Everything is stored as a readyState on the request object
//
// // Tell the browser we're about to make a request
// var request = new XMLHttpRequest();
// console.log(request.readyState);
//
// // Give the browser details about the request
// request.open( "GET", "http://omdbapi.com?t=Satantango" );
// console.log(request.readyState);
//
// // Make the request
// request.send();
// console.log(request.readyState);
//
// // Handle the response of the request
// request.onreadystatechange = function () {
//   console.log(request.readyState);
//   if (request.readyState !== 4) {
//     return false;
//   }
//   // Everything is sent as a single string
//   // Even though the responseText looks like a JS object, it isn't - it's JSON (a string representation)
//   var parseData = JSON.parse( request.responseText );
//   // console.log(request.responseText);
//   var title = parseData["Title"];
//   console.log(title);
//   console.log(parseData["Year"]);
//   console.log(parseData["Director"]);
// };


// We need to make sure that the page is loaded
// We need to add event handlers
// When those events run, we need to make an XHR request
window.onload = function() {
    var btn = document.querySelector("button");
    btn.addEventListener("click", function() {
        //  GET the input's current value
        var input = document.querySelector("input").value;
        //  Constract the URL using that value
        var url = "http://omdbapi.com?s=" + input;
        // Make the request
        var request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();
        // Once the data comes back...
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                var parseData = JSON.parse(request.responseText);
                console.log(parseData);
                searchMovieDb(parseData);
            }
        };
    });
};


var movieTitleListener = function(searchResult, title) {
    searchResult.addEventListener("click", function() {
        var searchUrl = "http://omdbapi.com?t=" + title;
        var movieRequest = new XMLHttpRequest();
        movieRequest.open("GET", searchUrl);
        movieRequest.send();
        movieRequest.onreadystatechange = function() {
            if (movieRequest.readyState !== 4) {
                return false;
            }
            var movieData = JSON.parse(movieRequest.responseText);
            displayMovie(movieData);
        };
    });
};

var searchMovieDb = function (parseData) {
    var output = document.querySelector(".output");
    output.innerHTML = "";
    for (var i = 0; i < parseData.Search.length; i += 1) {
        var searchResult = document.createElement("div");
        var title = parseData.Search[i]["Title"];
        var newTitle = document.createTextNode(title);
        searchResult.appendChild(newTitle);
        output.appendChild(searchResult);
        output.appendChild(document.createElement("hr"))
        movieTitleListener(searchResult ,title);
    }
};

var displayMovie = function (movieData) {
    console.log(movieData);
    var movieTitle = movieData["Title"];
    var showTitle = document.createElement("h3");
    showTitle.innerHTML = movieTitle;

    var movieDirector = movieData["Director"];
    var showDirector = document.createElement("h4");
    showDirector.innerHTML = "Director: " + movieDirector;

    var movieActors = movieData["Actors"];
    var showActors = document.createElement("p");
    showActors.innerHTML = "Actors: " +movieActors;

    var movieRuntime = movieData["Runtime"];
    var showRuntime = document.createElement("p");
    showRuntime.innerHTML = "Runtime: " + movieRuntime;

    var moviePoster = movieData["Poster"];
    var showPoster = document.createElement("img");
    showPoster.setAttribute("src",moviePoster);

    var outputMovie = document.querySelector(".output");
    outputMovie.innerHTML = "";
    outputMovie.appendChild(showTitle);
    outputMovie.appendChild(showDirector);
    outputMovie.appendChild(showActors);
    outputMovie.appendChild(showRuntime);
    outputMovie.appendChild(showPoster);
};




// request.open( "GET", "http://omdbapi.com?t=Satantango" );
// REPLACE t with S to get a list of all titles containing the search word
