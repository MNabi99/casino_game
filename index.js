var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png  -  images/dice6.png

var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", randomImageSource);

/*var randomNumber2 = Math.floor(Math.random () * 6)+1;

var randomImageSource2 = "imges/dice"  + randomNumber2 + ".png"

document.querySelectorAll("img") [1].setAttribute("src", randomImageSource2); */
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png";  //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png  -  images/dice6.png

var image2 = document.querySelectorAll("img") [1];
image2.setAttribute("src", randomImageSource2);


var randomNumber3 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage3 = "dice" + randomNumber3 + ".png";  //dice1.png - dice6.png

var randomImageSource3 = "images/" + randomDiceImage3; // images/dice1.png  -  images/dice6.png

var image3 = document.querySelectorAll("img") [2];
image3.setAttribute("src", randomImageSource3);


var randomNumber4 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage4 = "dice" + randomNumber4 + ".png";  //dice1.png - dice6.png

var randomImageSource4 = "images/" + randomDiceImage4; // images/dice1.png  -  images/dice6.png

var image2 = document.querySelectorAll("img") [3];
image4.setAttribute("src", randomImageSource4);

/*
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML  = "Play Again" ;
} else if (randomNumber2 > randomNumber1) {
      document.querySelector( "h1").innerHTML  = "Play Again";
} eles {
    document.querySelector("h1").innerHTML  = "Let´s Enojoy";
}*/
