var countURL = "http://api.open-notify.org/astros.json";

var pplCount = null;

var displayNumber = function ( data ) {
  // console.log(data);
  var number = data.number;

    var $p = $("<h4></h4>");
    $p.text( number );
    $(".count p").prepend($p);
};

var getNumberOfPeople = function () {
  // Make the AJAX request
    //  WHAT URL?
    // WHAT type?
    // WHAT dataType are you requesting
      // Once it is succesfully returned, call displayChuckQuote
    $.ajax({
          url: countURL,
          type: "GET",
          dataType: "JSONP"
      }).done( displayNumber );
};


$(document).ready(function () {

    getNumberOfPeople();


    window.setInterval( function() {
      $(".count p").html("");
      getNumberOfPeople();
    } , 1000);


});
