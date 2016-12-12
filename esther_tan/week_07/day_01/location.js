//Do something cool with ISS current location: Latitude & longitude

CALLBACK({
  "message": "success",
  "timestamp": UNIX_TIME_STAMP,
  "iss_position": {
    "latitude": CURRENT_LATITUDE,
    "longitude": CURRENT_LONGITUDE
  }
})

$.ajax({
  url: "http://api.open-notify.org/iss-now.json",
  dataType: "JSONP"
}).done(function (json) {
  console.log( json );
});

//Do something cool with ISS pass times: Where it passes on the earth's surface
