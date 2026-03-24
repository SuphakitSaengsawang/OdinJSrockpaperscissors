let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

function getComputerChoice() {
  const computerRandomizer = Math.floor(Math.random() * 3);

  if (computerRandomizer === 0) {
    return "Rock";
  } else if (computerRandomizer === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  if (humanChoice === computerChoice) {
    resultDiv.textContent = `Draw! You both picked ${humanChoice}.`;
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore += 1;
    resultDiv.textContent = "You WIN! Rock beats Scissors.";
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore += 1;
    resultDiv.textContent = "You WIN! Scissors beats Paper.";
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore += 1;
    resultDiv.textContent = "You WIN! Paper beats Rock.";
  } else {
    computerScore += 1;
    resultDiv.textContent = `You LOSE! ${computerChoice} beats ${humanChoice}.`;
  }

  scoreDiv.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

  if (humanScore === 5) {
    winnerDiv.textContent = "🏆 You win the game!";
    disableButtons();
  } else if (computerScore === 5) {
    winnerDiv.textContent = "💻 Computer wins the game!";
    disableButtons();
  }
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

rockBtn.addEventListener("click", function () {
  const computerChoice = getComputerChoice();
  playRound("Rock", computerChoice);
});

paperBtn.addEventListener("click", function () {
  const computerChoice = getComputerChoice();
  playRound("Paper", computerChoice);
});

scissorsBtn.addEventListener("click", function () {
  const computerChoice = getComputerChoice();
  playRound("Scissors", computerChoice);
});

scoreDiv.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;