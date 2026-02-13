//Computer side
function getComputerChoices() {
    const ComputerRandomizer = Math.floor(Math.random() * 3);

    if (ComputerRandomizer === 0) {
        return `Rock`
    } else if (ComputerRandomizer === 1) {
        return `Paper`
    } else {
        return `Scissors`
    }

}

// Human sides
function getHumanChoices() {
    let HumanChoices = prompt("A.) Rock B.) Paper C.) Scissors");



    if (HumanChoices === `A`) {
        HumanChoices = `Rock`;
    } else if (HumanChoices === `B`) {
        HumanChoices = `Paper`;
    } else {
        HumanChoices = `Scissors`;
    }

    return HumanChoices;
}

//result printing
const Computer = getComputerChoices();
console.log(`Computer picked: " ${Computer} " .`);

const Human = getHumanChoices();
console.log(`You picked: " ${Human} " .`);


function playerScore(Computer, Human) {
    let ComputerResult = Computer;
    let HumanResult = Human;

    if (HumanResult === ComputerResult) {
        console.log(`You both DRAW!`)
        return `DRAW!`;

    } else if (HumanResult === `Rock` && ComputerResult === `Scissors`) {
        console.log(`You WIN! Rock beat Scissors.`);
        return `WIN!`;

    } else if (HumanResult === `Scissors` && ComputerResult === `Paper`) {
        console.log(`You WIN! Scissors beat Paper.`);
        return `WIN!`;

    } else if (HumanResult === `Paper` && ComputerResult === `Rock`) {
        console.log(`You WIN! Paper beat Rock. `)
        return `WIN!`;

    } else {
        console.log(`You LOSE because " ${Computer} " beat  " ${Human} ".`)
        return `LOSE!`
    }


}

const GameResult = playerScore(Computer, Human);

let HumanScore = 0;
let ComputerScore = 0;

function playRound(GameResult) {



    if (GameResult === `WIN!`) {
       HumanScore += 1;
    } else if (GameResult === `LOSE!`) {
       ComputerScore += 1;
    } 

    

console.log(`Your score is ${HumanScore}. Computer score is ${ComputerScore}.`)
}

playRound(GameResult)

while (HumanScore < 5 && ComputerScore < 5) {
  const Computer = getComputerChoices();
  const Human = getHumanChoices();

  const GameResult = playerScore(Computer, Human);
  playRound(GameResult);
}

if (HumanScore === 5){
console.log("🏆 You win the game!");
} else console.log("💻 Computer wins the game!");