
var cat = document.querySelector("#cat");
cat.style.position ="absolute";
cat.style.left="0px";
cat.style.right= "0px";
var moveID = null;
var moveID2 = null;
windowWidth=window.innerWidth;


var backward = function(){

    var currentLeft = parseInt(cat.style.left);
    var desiredLeft = currentLeft - 20;

    cat.style.left = desiredLeft +"px";
    var windowWidth = window.innerWidth;

    console.log(desiredLeft);

    if (desiredLeft < 0)
    {
        window.clearInterval(moveID2);
        cat.style.left= "0px";
        moveID= window.setInterval(forward, 1000);
    }
};



var forward = function(){
    var currentLeft = parseInt(cat.style.left);
    var desiredLeft = currentLeft + 15;

    cat.style.left = desiredLeft +"px";
    var windowWidth = window.innerWidth;
    if (desiredLeft > windowWidth){
        window.clearInterval(moveID);
        //window.setInterval(backward, 150);
        cat.style.left= desiredLeft + "px";

        moveID2= window.setInterval(backward,500);
    }
};

moveID= window.setInterval(forward, 450);
