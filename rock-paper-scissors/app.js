
document.getElementById("computer-choice")
document.getElementById("player-choice")
document.getElementById("result")

const possibleChoices = document.querySelectorAll('button')

var player 
var computer
var result

possibleChoices.forEach(button => button.addEventlistener('click', (e) => {
player = e.target.id;
playerChoice.innerHTML = player;
generateComputerChoice();
}));

const randomNumber = Math.floor(Math.random() * 3) + 1;

if(randomNumber == 1) {
    computer = "rock"
}

if(randomNumber == 2) {
    computer = "paper"
}

if(randomNumber == 3) {
    computer = "scissors"
}

let html = document.getElementById("computerChoice").innerHTML;

let getResult 

