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
    let Humanresult = HumanChoice;
    //convert number into my desired result of Rock-paper-scissors.
    if (Humanresult == `A`) {
        Humanresult = `Rock`;
    } else if (Humanresult == `B`) {
        Humanresult = `Paper`;
    } else if (Humanresult == `C`) {
        Humanresult = `Scissor`;
    } else {
        console.log(`Wrong answer`)
    }


    return Humanresult
}

console.log(`You Chose \"  ${getHumanChoice()}  \"`);

function getComputerChoice() {
    //generate random value. 
    const cpurandomizer = Math.floor(Math.random() * 3);
    let Botresult = cpurandomizer;

    //convert number into my desired result of Rock-paper-scissors.
    if (Botresult === 0) {
        Botresult = `Rock`;
    } else if (Botresult === 1) {
        Botresult = `Paper`;
    } else {
        Botresult = `Scissor`;
    }

    return Botresult
}

//check result here!
console.log(`Bot threw: \"  ${getComputerChoice()}  \"`);

let humanScore = 0;
let computerScore = 0;

function playRound(){

}