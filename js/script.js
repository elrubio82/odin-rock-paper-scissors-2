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
function showMessageInParagraph(paragraphSelector, message) {
    document.querySelector(paragraphSelector).innerText = message;
}
function playRound(humanChoice, computerChoice) {
    if (round === 0) {
        showMessageInParagraph(".result .total", "");
        showMessageInParagraph(".result .partial", "");
        showMessageInParagraph(".result .newGame", "");
    }
    if (humanChoice.toLowerCase() === "rock") {
        switch (computerChoice.toLowerCase()) {
            case "rock":
                showMessageInParagraph(".result .message", "Both have chosen rock !")
                showMessageInParagraph(".result .partial", "Partial Result =" + " You : " + humanScore + " , Computer : " + computerScore)
                break;
            case "paper":
                computerScore++;
                showMessageInParagraph(".result .message", "You lose! Paper beats Rock !");
                showMessageInParagraph(".result .partial", "Partial Result =" + " You : " + humanScore + " , Computer : " + computerScore);
                break;
            case "scissors":
                humanScore++;
                showMessageInParagraph(".result .message", "You win! Rock beats Scissor !");
                showMessageInParagraph(".result .partial", "Partial Result =" + " You : " + humanScore + " , Computer : " + computerScore);
                break;
        }
    } else if (humanChoice.toLowerCase() === "paper") {
        switch (computerChoice.toLowerCase()) {
            case "rock":
                humanScore++;
                showMessageInParagraph(".result .message", "You win! Paper beats Rock !");
                showMessageInParagraph(".result .partial", "Partial Result =" + " You : " + humanScore + " , Computer : " + computerScore);
                break;
            case "paper":
                showMessageInParagraph(".result .message", "Both have chosen paper !");
                showMessageInParagraph(".result .partial", "Partial Result =" + " You : " + humanScore + " , Computer : " + computerScore)
                break;
            case "scissors":
                computerScore++;
                showMessageInParagraph(".result .message", "You loose ! Scissors beats Paper !");
                showMessageInParagraph(".result .partial", "Partial Result =" + " You : " + humanScore + " , Computer : " + computerScore);
                break;
        }
    } else {
        switch (computerChoice.toLowerCase()) {
            case "rock":
                computerScore++;
                showMessageInParagraph(".result .message", "You loose! Rock beats Scissor !");
                showMessageInParagraph(".result .partial", "Partial Result =" + " You : " + humanScore + " , Computer : " + computerScore);
                break;
            case "paper":
                humanScore++;
                showMessageInParagraph(".result .message", "You win! Scissor beats paper !");
                showMessageInParagraph(".result .partial", "Partial Result =" + " You : " + humanScore + " , Computer : " + computerScore);
                break;
            case "scissors":
                showMessageInParagraph(".result .message", "Both have chosen scissors !");
                showMessageInParagraph(".result .partial", "Partial Result =" + " You : " + humanScore + " , Computer : " + computerScore)
                break;
        }
    }
    round++;
    if (humanScore === 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            showMessageInParagraph(".result .total", "Human win " + humanScore + " : " + computerScore + " !");
        } else if (humanScore === computerScore) {
            showMessageInParagraph(".result .total", "No one win " + computerScore + " : " + humanScore);
        } else {
            showMessageInParagraph(".result .total", "Computer win " + computerScore + " : " + humanScore + " !");
        }
        showMessageInParagraph(".result .newGame", "Make your choice if you would like to play a new game ...");
        round = 0;
        humanScore = 0;
        computerScore = 0;
    }
}

let humanScore = 0;
let computerScore = 0;
let round = 0;
document.querySelector(".userChoice").addEventListener("click",
    function (event) {
        playRound(event.target.id, getComputerChoice());
    });

