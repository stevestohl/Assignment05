// Rock, Paper, Scissors Game

// 1. Get the user's choice
let userChoice = prompt("Do you change Rock, paper, or scissors?").toLowerCase();

// Validate user input
if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    alert("Invalid choice. Please refresh and enter rock, paper, or scissors.");
} else {

    // 2. Generate the computer's choice (0, 1, or 2)
    let computerNumber = Math.floor(Math.random() * 3);

    // Convert number to string
    let computerChoice;
    if (computerNumber === 0) {
        computerChoice = "rock";
    } else if (computerNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    // 3. Determine the winner
    let result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    // 4. Display the result
    alert(
        `You chose ${userChoice}.\n` +
        `The computer chose ${computerChoice}.\n\n` +
        result
    );
}