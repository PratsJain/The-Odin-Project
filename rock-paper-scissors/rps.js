function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let val = Math.floor(Math.random() * 3);
    return choices[val];
}

function playRound(computerSelection, playerSelection) {
    let psel = playerSelection.toLowerCase();
    if(psel.localeCompare(computerSelection) === 0) {
        return 0;
    }
    else if(psel.localeCompare("rock") === 0) {
        if(computerSelection.localeCompare("paper") === 0) {
            return -1;
        }
        else {
            return 1;
        }
    }
    else if(psel.localeCompare("paper") === 0) {
        if(computerSelection.localeCompare("scissors") === 0) {
            return -1;
        }
        else {
            return 1;
        }
    }
    else if(psel.localeCompare("scissors") === 0) {
        if(computerSelection.localeCompare("rock") === 0) {
            return -1;
        }
        else {
            return 1;
        }
    }
    else {
        return -2;
    }
}

function game() {
    console.log("Welcome to Rock-Paper-Scissors!!\nLets start a 5 round game!!\n");
    let score = 0;
    for(let i = 0; i < 5; ++i) {
        let playerSelection;
        let comp;
        let res = -2;
        while(res === -2) {
            playerSelection = prompt("Enter your choice: ");
            comp = getComputerChoice();
            res = playRound(comp, playerSelection);
            if(res === -2) {
                console.log("Wrong choice! Enter Again!")
            }
        }
        score += res;
        console.log(`Result of Round ${i}: \n`);
        if(res === 0) {
            console.log("Draw.\n");
        } 
        else if(res === 1) {
            console.log(`You Win! ${playerSelection} beats ${comp}\n`);
        }
        else {
            console.log(`You Lose! ${comp} beats ${playerSelection}\n`);
        }
    }
    if(score > 0) {
        console.log("You Win the 5 round game!\n");
    }
    else if(score < 0) {
        console.log("You Lose the 5 round game!\n");
    }
    else {
        console.log("The 5 round game was drawn!\n");
    }
}

game();