//$("h1").rainbow();
//$("h1").rainbow("yellow", "orange", "red");
$( document ).ready( function () {
  $('.slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
    
  });

});
