function getComputerChoice() {
    const cpurandomizer = Math.floor(Math.random() * 3);
    let Botresult = cpurandomizer;

    if (Botresult === 0) {
        Botresult = `Rock`;
    } else if (Botresult === 1) {
        Botresult = `Paper`;
    } else {
        Botresult = `Scissors`;
    }

    return Botresult
}

console.log(`Bot threw ${getComputerChoice()}`);