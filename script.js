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