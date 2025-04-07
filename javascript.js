

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == 'rock' & computerChoice == 'scissors') {
        console.log("You win! Rock beats Scissors!");
        return 1;
    } else if (humanChoice.toLowerCase() == 'rock' & computerChoice == 'paper') {
        console.log("You lose! Rock loses to Paper!");
        return -1;
    } else if (humanChoice.toLowerCase() == 'paper' & computerChoice == 'rock') {
        console.log("You win! Paper beats Rock!");
        return 1;
    } else if (humanChoice.toLowerCase() == 'paper' & computerChoice == 'scissors') {
        console.log("You lose! Paper loses to Scissors!");
        return -1;
    } else if (humanChoice.toLowerCase() == 'scissors' & computerChoice == 'paper') {
        console.log("You win! Scissors beats Paper!");
        return 1;
    } else if (humanChoice.toLowerCase() == 'scissors' & computerChoice == 'rock') {
        console.log("You lose! Scissors loses to Rock!");
        return -1;
    } else {
        console.log("Tie Round!")
        return 0;
    }

}

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


playGame()