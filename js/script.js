
function getComputerChoice() {
    let toReturn;
    let random = Math.random();
    if (random < 0.33) {
        toReturn = "Rock";
    } else if (random < 0.66) {
        toReturn = "Paper";
    }
    else {
        toReturn = "Scissors";
    }
    console.log("Computer Choice: " + toReturn);
    return toReturn;
}
function getHumanChoice() {
    let input = prompt("Rock , Paper , Scissors ?");
    console.log("Human Choice: " + input);
    return input;
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() === "rock") {
            switch (computerChoice.toLowerCase()) {
                case "rock":
                    console.log("Both have chosen rock!")
                    break;
                case "paper":
                    console.log("You lose! Paper beats Rock");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You win! Rock beats Scissor");
                    humanScore++;
                    break;
            }
        } else if (humanChoice.toLowerCase() === "paper") {
            switch (computerChoice.toLowerCase()) {
                case "rock":
                    console.log("You win! Paper beats Rock");
                    humanScore++;
                    break;
                case "paper":
                    console.log("Both have chosen paper!")
                    break;
                case "scissors":
                    console.log("You loose! Scissors beats Paper");
                    computerScore++;
                    break;
            }
        } else {
            switch (computerChoice.toLowerCase()) {
                case "rock":
                    console.log("You loose! Rock beats Scissor");
                    computerScore++;
                    break;
                case "paper":
                    console.log("You win! Scissor beats paper");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("Both have chosen scissors!")
                    break;
            }
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log("Human win " + humanScore + " : " + computerScore);
    } else if (humanScore === computerScore) {
        console.log("No one win " + computerScore + " : " + humanScore);
    } else {
        console.log("Computer win " + computerScore + " : " + humanScore);
    }
}
playGame();
