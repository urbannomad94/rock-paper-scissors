//Declaring variables
const computerSelectionDisplay = document.getElementById('computer-selection');
const playerSelectionDisplay = document.getElementById('player-selection');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const possibleChoices = document.querySelectorAll('.buttons');
const reset = document.getElementById('reset');
let playerSelection;
let computerSelection;
let result;
let score;

let tie = 0;
let win = 0;
let loss = 0;
let compWin = 0;
let compLoss = 0;

//Assigns user's choice based on which button they click
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
   playerSelection = e.target.id;
   playerSelectionDisplay.innerHTML = playerSelection;
   computerPlay();
   playRound();
   scoreCalculation();
   displayWinner();
}))

//Computer will randomly choose rock, paper, or scissors
function computerPlay() {
    random = Math.random()*3;
    if (random <= 1) {
        computerSelection = "rock";
    }
    else if (random <= 2) {
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";
    }
    computerSelectionDisplay.innerHTML = computerSelection;
}

//Single round of RPS
function playRound () {
    console.log("You selected:", playerSelection);
    console.log("The computer selected:", computerSelection);

    if (playerSelection === computerSelection) {
        result = "Tie";
        tie++;
    }

    else if (playerSelection === "rock" && computerSelection === "paper"){
        result = "You lose, paper beats rock.";
        loss++;
        compWin++;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors"){
        result = "You win, rock beats scissors.";
        win++;
        compLoss++;
    }

    else if (playerSelection === "paper" && computerSelection === "rock"){
        result = "You win, paper beats rock.";
        win++;
        compLoss++;
    }

    else if (playerSelection === "paper" && computerSelection === "scissors"){
        result = "You lose, scissors beats paper.";
        loss++;
        compWin++;
    }

    else if (playerSelection === "scissors" && computerSelection === "rock"){
        result = "You lose, rock beats scissors.";
        loss++;
        compWin++;
    }

    else if (playerSelection === "scissors" && computerSelection === "paper"){
        result = "You win, scissors beats paper.";
        win++;
        compLoss++;
    }

    else {
        result = "Not a valid entry.";
    }
    resultDisplay.innerHTML = result;
}

//Displays the current score (win-loss-tie)
function scoreCalculation() {
    score = `${win} - ${compWin} - ${tie}`;
    scoreDisplay.innerHTML = score;
}

//Alerts the winner once the user of computer reaches 5 wins
function displayWinner() {
    if (win >= 5) {
        alert("You won!");
    }
    if (compWin >= 5) {
        alert("You lost!");
    }
}

//Gives reset button functionality
reset.addEventListener ('click', () => {
    tie = 0;
    win = 0;
    loss = 0;
    compWin = 0;
    compLoss = 0;
    location.reload();
})