var catNode = document.querySelector('.cat');

backgroundsArray = [
  "http://www.mrwallpaper.com/wallpapers/cobblestone-street-1920x1080.jpg",
  "https://wallpaperscraft.com/image/sun_morning_city_buildings_houses_28651_1920x1080.jpg",
  "http://i.imgur.com/xjdyj.jpg",
  "http://www.mrwallpaper.com/wallpapers/Highway-Landscape-1920x1080.jpg",
  "http://wallpoper.com/images/00/44/37/30/grand-canyon_00443730.jpg",
  "https://wallpaperscraft.com/image/snow_slope_winter_mountains_resort_mountain-skiing_trees_fir-trees_sky_clear_61220_1920x1080.jpg",
  "https://wallpaperscraft.com/image/clouds_sky_blue_ease_volume_patterns_air_masses_60819_1920x1080.jpg",
  "http://www.4t4.org/images/2014/10/12/earth-space-sun-1920x1080.jpg",
  "http://img0.mxstatic.com/wallpapers/8e4de37e7ad657a1a2a72b4508d0bd00_large.jpeg",
  "http://img2.goodfon.su/original/1920x1080/c/e7/mars-planeta-opportunity-foto-1792.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/22/39/ef/2239efc95e563078c9997a8899eb65ae.jpg",
  "https://i.ytimg.com/vi/YdSz12Glhlw/maxresdefault.jpg",
  "https://wallpaperscraft.com/image/space_flight_sky_stars_82970_1920x1080.jpg",
];
var currentBackgroundPositon = 0;
var backgroundImageNode = document.createElement("img");
backgroundImageNode.setAttribute("src",backgroundsArray[0]);
backgroundImageNode.style.position="absolute";
backgroundImageNode.style.top="-300px";

var screenRight = window.innerWidth;
console.log(screenRight);

catNode.style.left="0px"; // start position
var currentPositionX = 0;
var currentPositionY =20;
catNode.style.width="50px";
catNode.style.zIndex="9999";
currentWidth = catNode.width;
var animationNumber = 1;
var CatWalkId=null;
var insertBackground = false;


movementObject = {
  leftToRightZoom:[2.9,0,0.5],
  rightToLeftZoom:[-2.9,0,0.5],
  leftToRightNoZoom:[2.9,0,0],
  rightToLeftNoZoom:[-2.9,0,0],
  stopMoving:[0,0,0],
};
var currentMovementOrder = movementObject.leftToRightZoom;
var catTurnCount = 0;


var catWalk = function (){

  catNode.style.left=currentPositionX+"px";
  catNode.style.top=currentPositionY+"px";
  catNode.style.width=currentWidth+"px";

  currentPositionX = parseInt(currentPositionX);
  currentPositionY=parseInt(currentPositionY);
  //currentWidth=parseInt(currentWidth);
  currentWidth = parseFloat(currentWidth);

  currentPositionX += currentMovementOrder[0];
  currentPositionY += currentMovementOrder[1];
  currentWidth += currentMovementOrder[2];

  if ( (currentPositionX > screenRight - currentWidth)  && (catTurnCount <1) ){
    catNode.style.transform="scaleX(-1)";
    currentMovementOrder = movementObject.rightToLeftZoom;
    catTurnCount += 1;
    //window.clearInterval(CatWalkId);
  }
  if ( (currentPositionX > screenRight - currentWidth)  && (catTurnCount > 1) && (catTurnCount < 4)){
    catNode.style.transform="scaleX(-1)";
    currentMovementOrder = movementObject.rightToLeftNoZoom;
    catTurnCount += 1;
    //window.clearInterval(CatWalkId);
  }

  if (currentPositionX < 0  && (catTurnCount < 2)){
    catNode.style.transform="scaleX(1)";
    currentMovementOrder = movementObject.leftToRightZoom;
    catTurnCount += 1;
  }
  if (currentPositionX < 0  && (catTurnCount > 2) && (catTurnCount < 4) ){
    catNode.style.transform="scaleX(1)";
    currentMovementOrder = movementObject.leftToRightNoZoom;
    catTurnCount += 1;
  }
  // if (currentPositionX === (screenRight*0.3)){
  //   console.log("Cat Dance");
  //   catNode.setAttribute("src","http://37.media.tumblr.com/9a3debb1d127dca19a847bd04e575220/tumblr_n7bzevT8vH1sedjuto1_500.gif");
  //
  // }
  // if (CatTurnCount >10){
  //   catNode.setAttribute("src","http://www.anniemation.com/clip_art/images/cat-walk.gif");
  // }
  if (catTurnCount >= 4 ){
    catNode.style.transform="scaleX(1)";
    currentMovementOrder=movementObject.stopMoving;
    catNode.style.left="-300px";
    catNode.style.top="150px";
    catNode.style.width="600px";
    catTurnCount +=1;

    insertBackground = true;
  }


};


CatWalkId = window.setInterval(catWalk,20);
//backgroundImage = window.setInterval()

var backgroundMovement = function(){

  backgroundImageNode.style.left=currentBackgroundPositon+"px";
  currentBackgroundPositon = parseInt(currentBackgroundPositon);
  currentBackgroundPositon -= 5;
  document.body.appendChild(backgroundImageNode);
};
//setTimeout(window.setInterval(backgroundMovement,20), 50000);

var activateBackground = function(){
  window.setInterval(backgroundMovement,100);
};

var imageNumber = 1; // second image

var changeBackground = function(){
  currentBackgroundPositon = 0;
  backgroundImageNode.style.left="-20px";
  backgroundImageNode.setAttribute("src",backgroundsArray[imageNumber]);
  imageNumber += 1;
  if (imageNumber ===13){
    imageNumber = 1;
  }
};

var intervalChangeBackground = function(){
  window.setInterval(changeBackground,10000);
};

window.setTimeout(activateBackground,27000);
window.setTimeout(intervalChangeBackground,27000);

var video = document.createElement("iframe");
video.frameborder="0";
video.width="0";
video.height="0";
video.setAttribute("src","http://www.dailymotion.com/video/x1h6ef_soul-asylum-runaway-train_music?autoplay=1");
var playAudio = function(){
 document.body.appendChild(video);
};

window.setTimeout(playAudio,11000);

var gifGirlDance = function (){
  var girlDanceNode = document.createElement("img");
  girlDanceNode.style.position="absolute";
  girlDanceNode.style.zIndex="99999";
  girlDanceNode.style.top="200px";
  girlDanceNode.style.left="500px";
  girlDanceNode.style.width="300px";
  girlDanceNode.setAttribute("src","http://orig10.deviantart.net/19f5/f/2015/035/8/5/commission__val____dance_like_jake_the_dog_by_orribu-d8gqf91.gif");
  document.body.appendChild(girlDanceNode);
};

window.setTimeout(gifGirlDance,35000);


var gifGuyDance = function (){
  var guyDanceNode = document.createElement("img");
  guyDanceNode.style.position="absolute";
  guyDanceNode.style.zIndex="99999";
  guyDanceNode.style.top="200px";
  guyDanceNode.style.left="750px";
  guyDanceNode.style.width="250px";
  guyDanceNode.setAttribute("src","https://media.giphy.com/media/o9yAd5aKOK1W0/giphy.gif");
  document.body.appendChild(guyDanceNode);
};

window.setTimeout(gifGuyDance,50000);

var gifStickDance = function (){
  var stickDanceNode = document.createElement("img");
  stickDanceNode.style.position="absolute";
  stickDanceNode.style.zIndex="99999";
  stickDanceNode.style.top="200px";
  stickDanceNode.style.left="900px";
  stickDanceNode.style.width="300px";
  stickDanceNode.setAttribute("src","https://media.giphy.com/media/MuMOXSCsxckgw/giphy.gif");
  document.body.appendChild(stickDanceNode);
};

window.setTimeout(gifStickDance,65000);

var gifCatDance = function (){
  var catDanceNode = document.createElement("img");
  catDanceNode.style.position="absolute";
  catDanceNode.style.zIndex="9999999";
  catDanceNode.style.top="320px";
  catDanceNode.style.left="610px";
  catDanceNode.style.width="350px";
  catDanceNode.setAttribute("src","https://media.giphy.com/media/R2mIQYN89tp2U/giphy.gif");
  document.body.appendChild(catDanceNode);
};

window.setTimeout(gifCatDance,80000);


var gifHelmetDance = function (){
  var helmetDanceNode = document.createElement("img");
  helmetDanceNode.style.position="absolute";
  helmetDanceNode.style.zIndex="999999999";
  helmetDanceNode.style.top="80px";
  helmetDanceNode.style.left="-20px";
  helmetDanceNode.style.width="350px";
  helmetDanceNode.setAttribute("src","https://media.giphy.com/media/iv0h5Rq68SyGY/giphy.gif");
  document.body.appendChild(helmetDanceNode);
};

window.setTimeout(gifHelmetDance,95000);





var gifAlienDance = function (){
  var alienDanceNode = document.createElement("img");
  alienDanceNode.style.position="absolute";
  alienDanceNode.style.zIndex="99999999";
  alienDanceNode.style.top="500px";
  alienDanceNode.style.left="550px";
  alienDanceNode.style.width="300px";
  alienDanceNode.setAttribute("src","https://media.giphy.com/media/v9d3yWWJzijtK/giphy.gif");
  document.body.appendChild(alienDanceNode);
};

window.setTimeout(gifAlienDance,110000);

var shipDanceNode;
var gifShipDance = function (){
  shipDanceNode = document.createElement("img");
  shipDanceNode.style.position="absolute";
  shipDanceNode.style.zIndex="99";
  shipDanceNode.style.top="150px";
  shipDanceNode.style.left="950px";
  shipDanceNode.style.width="300px";
  shipDanceNode.setAttribute("src","http://i.imgur.com/TZ9hcDg.png");
  document.body.appendChild(shipDanceNode);
};

window.setTimeout(gifShipDance,130000);

var shipCurrentPositionX = "950px";
var shipCurrentPositionY = "150px";

var moveShip = function(){
  shipDanceNode.style.left=shipCurrentPositionX+"px";
  shipDanceNode.style.top=shipCurrentPositionY+"px";
  shipCurrentPositionX = parseInt(shipCurrentPositionX);
  shipCurrentPositionX -= 4;
  shipCurrentPositionY = parseInt(shipCurrentPositionY);
  shipCurrentPositionY -= 2;
};

window.setInterval(moveShip,100);
