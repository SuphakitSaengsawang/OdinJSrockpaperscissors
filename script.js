function getHumanChoice() {
  let HumanChoice = prompt(
`🎮 Welcome to Rock–Paper–Scissors!
The bot has already made its choice.
Please choose one:
A) Rock
B) Paper
C) Scissors
Enter A, B, or C:`
  );

  if (HumanChoice === null) return null; // user pressed cancel

  let choice = HumanChoice.trim().toLowerCase();

  if (choice === "a") return "Rock";
  if (choice === "b") return "Paper";
  if (choice === "c") return "Scissor";

  console.log("Wrong answer");
  return null;
}

function getComputerChoice() {
  const cpurandomizer = Math.floor(Math.random() * 3);

  if (cpurandomizer === 0) return "Rock";
  if (cpurandomizer === 1) return "Paper";
  return "Scissor";
}

function playRound(human, computer) {
  if (!human) return "No valid human choice.";

  if (human === computer) {
    return "You both draw";
  } else if (human === "Rock" && computer === "Scissor") {
    return "You win! Rock beats Scissor";
  } else if (human === "Scissor" && computer === "Paper") {
    return "You win! Scissor beats Paper";
  } else if (human === "Paper" && computer === "Rock") {
    return "You win! Paper beats Rock";
  } else {
    return `CPU wins! ${computer} beats ${human}`;
  }
}

let humanScore = 0;
let computerScore = 0;

function scoreCount(roundResult) {
  if (!roundResult) return;

  if (roundResult.includes("You win!")) {
    humanScore++;
  } else if (roundResult.includes("CPU wins!")) {
    computerScore++;
  } else if (roundResult.includes("draw")) {
    console.log("Tie — no score change");
  }
}

// run one round
const human = getHumanChoice();
const computer = getComputerChoice();

console.log(`You chose "${human}"`);
console.log(`Bot threw "${computer}"`);

const roundResult = playRound(human, computer);
console.log(roundResult);

scoreCount(roundResult);
console.log(`Human: ${humanScore} VS Computer: ${computerScore}`);
