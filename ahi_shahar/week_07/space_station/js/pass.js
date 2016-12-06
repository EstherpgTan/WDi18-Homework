var passURL = "http://api.open-notify.org/iss-pass.json";

var timeConverter = function (UNIX_timestamp) {
  var timestamp = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = timestamp.getFullYear();
  var month = months[timestamp.getMonth()];
  var date = timestamp.getDate();
  var hour = timestamp.getHours();
  var min = timestamp.getMinutes();
  var sec = timestamp.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  console.log(timestamp);
  return time;
};


var displayPassTimes = function ( data ) {
  console.log(data);

  for (var i = 0 ; i < data.response.length ; i += 1 ) {
    var result = timeConverter(data.response[i].risetime)
    console.log(result);
    var $p = $("<h5></h5>");
    $p.text( result );
    $(".search .content").append($p);
  }
};

var getPassTimes = function (searchLong,searchLat) {

  var params = {
    lat: searchLat,
    lon: searchLong,
  };

  $.ajax({
          url: passURL,
          type: "GET",
          dataType: "JSONP",
          data: params
      }).done( displayPassTimes );
};


$(document).ready(function () {


    $(".search button").on("click", function() {
      var searchLong = $("#longitude").val();
      console.log(parseFloat(searchLong));
      var searchLat = $("#latitude").val();

      if (searchLong.length === 0 || searchLat.length === 0 ) {
        $("#longitude").css({
          "border": "1px solid red"
        });
        $("#latitude").css({
          "border": "1px solid red"
        });
        return false;
      };

      getPassTimes( searchLong, searchLat );
    });

});
