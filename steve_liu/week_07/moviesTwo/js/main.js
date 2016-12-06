// Tell the browser we are about to make a request


// We need to make sure that the page has loaded
  // We need to add event handlers
    // When those events run, we need to make an XHR request
window.onload = function(){
  var btn = document.querySelector("button");

  btn.addEventListener("click", function(){
    console.log("The button was clicked");

      // Get in input's current value
      var test = $("input");
      var inputValue = test[0].value;
      console.log(inputValue);

      // Construct the URL using that value

      var url = "http://www.omdbapi.com/?t=" + inputValue;
      console.log(url);



      // Make the request
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      console.log(xhr.readyState);

      xhr.send();
      console.log(xhr.readyState);



      xhr.onreadystatechange = function(){
        console.log( xhr.readyState );
        console.log( xhr.responseText );

        // If the browser hasn't finished dealing with the response
          // Dont continue running this function

        if ( xhr.readyState !== 4 ){
          return false;
        }

        console.log( xhr.responseText);

        // Everything is sent as a single string
        // Even if though the responseText looks like a JS object, it isn't - it's JSON (a string representation)

        var parsedData = JSON.parse( xhr.responseText );
        console.log("parsedData =", parsedData );

        var title = parsedData["Title"];
        var image = parsedData["Poster"];
        var director = parsedData["Director"];
        var country = parsedData["Country"];
        var genre = parsedData["Genre"];
        var plot = parsedData["Plot"];
        var runtime = parsedData["Runtime"];
        var year = parsedData["Year"];

        $( '.title' ).remove();
        var titleTag = document.createElement("h1");
        titleTag.innerHTML = title;
        titleTag.className = "title";
        document.body.appendChild(titleTag);

        $( '.year' ).remove();
        var yearTag = document.createElement("h2");
        yearTag.innerHTML = year;
        yearTag.className = "year";
        document.body.appendChild(yearTag);

        $( '.genre' ).remove();
        var genreTag = document.createElement("p");
        genreTag.innerHTML =  genre;
        genreTag.className = "genre";
        document.body.appendChild(genreTag);

        $( '.plot' ).remove();
        var plotTag = document.createElement("p");
        plotTag.innerHTML = plot;
        plotTag.className = "plot";
        document.body.appendChild(plotTag);

        $( '.image' ).remove();
        var imageTag = document.createElement("img");
        imageTag.src = image;
        imageTag.className = "image";
        console.log(imageTag);
        document.body.appendChild(imageTag);



      };


      // Once the data comes back...
        // Represent the movie on the page

          // Just the image
          // Create elements using JavaScript
            // document.createElement
  });

};
