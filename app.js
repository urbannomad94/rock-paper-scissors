//Computer will randomly choose rock, paper, or scissors
function computerPlay() {
    random=Math.random()*3;
    if (random<=1) {
        return "ROCK";
    }
    else if (random<=2) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        alert("Tie");
    }

    else if (playerSelection === "rock" && computerSelection === "paper"){
        alert ("You lose, paper beats rock.");
    }

    else if (playerSelection === "rock" && computerSelection === "scissors"){
        alert ("You win, rock beats scissors.");
    }

    else if (playerSelection === "paper" && computerSelection === "rock"){
        alert ("You win, paper beats rock.");
    }

    else if (playerSelection === "paper" && computerSelection === "scissors"){
        alert ("You lose, scissors beats paper.");
    }

    else if (playerSelection === "scissors" && computerSelection === "rock"){
        alert ("You lose, rock beats scissors.");
    }

    else if (playerSelection === "scissors" && computerSelection === "paper"){
        alert ("You win, scissors beats paper.");
    }
}
let playerSelection = prompt("Rock, paper, or scissors?");
let computerSelection = computerPlay();
playRound(playerSelection, computerSelection);

console.log(playerSelection);
console.log(computerSelection);