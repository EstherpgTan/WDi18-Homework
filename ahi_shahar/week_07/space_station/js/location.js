var locationURL = "http://api.open-notify.org/iss-now.json";

var pplCount = null;

var displayLocation = function ( data ) {
  console.log(data);
  var latitude = data.iss_position.latitude;
  var longitude = data.iss_position.longitude;

    var $p = $("<h2></h2>");
    $p.html( "Latitude: \n" + latitude + "<br><br>Longtitude: \n" + longitude );
    $(".location p").prepend($p);
};

var getLocation = function () {
    $.ajax({
          url: locationURL,
          type: "GET",
          dataType: "JSONP"
      }).done( displayLocation );
};


$(document).ready(function () {

    getLocation();


    window.setInterval( function() {
      $(".location p").html("");
      getLocation();
    } , 1000);


});
