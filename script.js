alert("Hii👋, This basic Dice 🎲 game is made up of pure HTML, CSS and JavaScript. There are three possible results, as usual: a tie, a win, or a loss. The fundamental rule is that you should have a higher number than your opponent 🤜🤛. You must first enter the names of both you and your opponent; if luck favors you, you will win. Let's check your level of luck😅. Note: This isn't biased🙈; rather, it can be used as a fair way to choosing between two people to make an unbiased group decision 😌😌...Have a great day ❤️");

var player1Name = prompt("Enter Player 1 GOOD Name");
var player2Name = prompt("Enter Player 2 GOOD Name");

document.querySelectorAll(".dice-container .dice p")[0].innerHTML = player1Name;
document.querySelectorAll(".dice-container .dice p")[1].innerHTML = player2Name;

function one() {
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

var heading = document.querySelector("h1")
if (randomNumber1 === randomNumber2) {
    heading.innerHTML = "It's Draw";
} else if (randomNumber1>randomNumber2) {
    heading.innerHTML = "Congratulation " + player1Name + ", You Won 🥳";
} else{
    heading.innerHTML = "Congratulation " + player2Name + ", You Won 🥳";
}

}



