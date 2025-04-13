function getComputerChoice() {
    let num = Math.random();
    switch(true) {
        case num <= .33:
            return "rock";
        case num <= .66:
            return "paper";
        default:
            return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Make your choice - Enter 'Rock', 'Paper', or 'Scissors'!");
    return input;
}

let humanScore = 0;
let computerScore = 0;
const resultsDiv = document.querySelector("div.results");
function playRound(humanChoice, computerChoice) {

    if (humanScore < 5 && computerScore < 5) {
        p = document.createElement("p");

        if (humanChoice.toLowerCase() == 'rock' & computerChoice == 'scissors') {
            p.textContent = "You win! Rock beats Scissors!";
            humanScore += 1
        } else if (humanChoice.toLowerCase() == 'rock' & computerChoice == 'paper') {
            p.textContent = "You lose! Rock loses to Paper!";
            computerScore += 1;
        } else if (humanChoice.toLowerCase() == 'paper' & computerChoice == 'rock') {
            p.textContent = "You win! Paper beats Rock!";
            humanScore += 1;
        } else if (humanChoice.toLowerCase() == 'paper' & computerChoice == 'scissors') {
            p.textContent = "You lose! Paper loses to Scissors!";
            computerScore += 1;
        } else if (humanChoice.toLowerCase() == 'scissors' & computerChoice == 'paper') {
            p.textContent = "You win! Scissors beats Paper!";
            humanScore += 1;
        } else if (humanChoice.toLowerCase() == 'scissors' & computerChoice == 'rock') {
            p.textContent = "You lose! Scissors loses to Rock!";
            computerScore += 1;
        } else {
            p.textContent = "Tie Round";
        }

        resultsDiv.appendChild(p);

        if (humanScore == 5) {
            result = document.createElement("p");
            result.textContent = `You win! Final Score: ${humanScore} - ${computerScore}`;
            resultsDiv.appendChild(result);
        } else if (computerScore == 5) {
            result = document.createElement("p");
            result.textContent = `You lose! Final Score: ${humanScore} - ${computerScore}`;
            resultsDiv.appendChild(result);
        }
    }
}

button = document.querySelector("button#rock");
button.addEventListener("click", () => playRound('rock', getComputerChoice()));

button = document.querySelector("button#paper");
button.addEventListener("click", () => playRound('paper', getComputerChoice()));

button = document.querySelector("button#scissors");
button.addEventListener("click", () => playRound('scissors', getComputerChoice()));

/*
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice())
        if (result == 1) {
            humanScore += 1;
        } else if (result == -1) {
            computerScore += 1;
        }
    }

    let winnerMessage;
    if (humanScore > computerScore) {
        winnerMessage = "You won the game!";
    } else if (humanScore < computerScore) {
        winnerMessage = "You lost the game!";
    } else {
        winnerMessage = "Tie Game!";
    }

    console.log(`${winnerMessage} Final Score: ${humanScore} - ${computerScore}`)

}
*/


// playGame()