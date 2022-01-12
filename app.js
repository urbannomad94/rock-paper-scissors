//Computer will randomly choose rock, paper, or scissors
function computerPlay() {
    random=Math.random()*3;
    if (random<=1) {
        return "rock";
    }
    else if (random<=2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//Single round of RPS
function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    computerSelection = computerPlay();

    console.log("You selected:", playerSelection);
    console.log("The computer selected:", computerSelection);

    if (playerSelection === computerSelection) {
        alert("Tie");
        console.log("Result: Tie");
        tie++;
    }

    else if (playerSelection === "rock" && computerSelection === "paper"){
        alert ("You lose, paper beats rock.");
        console.log ("Result: You lose, paper beats rock.");
        loss++;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors"){
        alert ("You win, rock beats scissors.");
        console.log ("Result: You win, rock beats scissors.");
        win++;
    }

    else if (playerSelection === "paper" && computerSelection === "rock"){
        alert ("You win, paper beats rock.");
        console.log ("Result: You win, paper beats rock.");
        win++;
    }

    else if (playerSelection === "paper" && computerSelection === "scissors"){
        alert ("You lose, scissors beats paper.");
        console.log ("Result: You lose, scissors beats paper.");
        loss++;
    }

    else if (playerSelection === "scissors" && computerSelection === "rock"){
        alert ("You lose, rock beats scissors.");
        console.log ("Result: You lose, rock beats scissors.");
        loss++;
    }

    else if (playerSelection === "scissors" && computerSelection === "paper"){
        alert ("You win, scissors beats paper.");
        console.log  ("Result: You win, scissors beats paper.");
        win++;
    }

    else {
        alert("Not a valid entry.")
        console.log  ("Not a valid entry");
    }

}

//5 rounds of RPS and alerts wins, losses, and ties after last round
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + tie);
}

//Declaring variables
let computerSelection;
let playerSelection;

let tie = 0;
let win = 0;
let loss = 0;

//Running game function
game();