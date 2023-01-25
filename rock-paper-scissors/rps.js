function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let val = Math.floor(Math.random() * 3);
    return choices[val];
}

function playRound(playerSelection, computerSelection) {
    // let computerSelection = getComputerChoice();
    let psel = playerSelection.toLowerCase();
    if (psel.localeCompare(computerSelection) === 0) {
        return 0;
    }
    else if (psel.localeCompare("rock") === 0) {
        if (computerSelection.localeCompare("paper") === 0) {
            return -1;
        }
        else {
            return 1;
        }
    }
    else if (psel.localeCompare("paper") === 0) {
        if (computerSelection.localeCompare("scissors") === 0) {
            return -1;
        }
        else {
            return 1;
        }
    }
    else if (psel.localeCompare("scissors") === 0) {
        if (computerSelection.localeCompare("rock") === 0) {
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

function playagain() {
    const playbtn = document.createElement('button');
    playbtn.classList.toggle('play');
    playbtn.textContent = "Play Again";
    playbtn.setAttribute('style', "border-radius: 10px; flex: 1;");
    const box = document.querySelector('.box');
    box.appendChild(playbtn);
    playbtn.addEventListener('click', () => {
        game();
    });
}
function game() {
    // alert(play.target);
    const play = document.querySelector('.play');
    const box = document.querySelector('.box');
    const msg = document.createElement('div');
    const compsch = document.querySelector('#csch');
    const plsch = document.querySelector('#psch');
    msg.setAttribute('style', "background-color: white; padding: 8px; text-align: center; white-space: pre;");
    msg.textContent = "Welcome to Rock-Paper-Scissors!!\r\nPress any button to start.\r\nFirst to 5 points will win!";
    box.removeChild(play);
    box.appendChild(msg);

    let comp = 0, player = 0;
    let compch;
    // for (let i = 0; i < 5; ++i) {
    let res;
    let playerSelection;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            msg.textContent = `${button.id}`;
            playerSelection = button.id;
            compch = getComputerChoice();
            res = playRound(button.id, compch);
            // msg.textContent = `player: ${playerSelection} comp: ${compch} res: ${res}`;
            if (res > 0) {
                ++player;
                plsch.textContent = `${player}`;
                msg.textContent = `You Win! ${playerSelection} beats ${compch}`;
            }
            else if (res < 0) {
                ++comp;
                compsch.textContent = `${comp}`;
                msg.textContent = `You Lose! ${compch} beats ${playerSelection}`;
            }
            else if (res == 0) {
                msg.textContent = "Draw!";
            }
            if (player === 5) {
                msg.textContent = `Congo!\r\nYou won ${player} - ${comp}.`;
                playagain();
            }
            else if (comp === 5) {
                msg.textContent = `Sad!\r\nYou lose ${comp} - ${player}.`;
                playagain();
            }
        })
    });
    // if (res > 0) {
    //     ++player;
    //     msg.textContent = `You Win! ${playerSelection} beats ${comp}`;
    // }
    // if (res < 0) {
    //     ++comp;
    //     msg.textContent = `You Lose! ${comp} beats ${playerSelection}`;
    // }
    // else {
    //     msg.textContent = "Draw!";
    // }
    // }
    // console.log("Welcome to Rock-Paper-Scissors!!\nLets start a 5 round game!!\n");
    // let score = 0;
    // for (let i = 0; i < 5; ++i) {
    //     let playerSelection;
    //     let comp;
    //     let res = -2;
    //     while (res === -2) {
    //         playerSelection = prompt("Enter your choice: ");
    //         comp = getComputerChoice();
    //         res = playRound(comp, playerSelection);
    //         if (res === -2) {
    //             console.log("Wrong choice! Enter Again!")
    //         }
    //     }
    //     score += res;
    //     console.log(`Result of Round ${i}: \n`);
    //     if (res === 0) {
    //         console.log("Draw.\n");
    //     }
    //     else if (res === 1) {
    //         console.log(`You Win! ${playerSelection} beats ${comp}\n`);
    //     }
    //     else {
    //         console.log(`You Lose! ${comp} beats ${playerSelection}\n`);
    //     }
    // }

}
function beg() {
    const playbutton = document.querySelector(".play");
    playbutton.addEventListener('click', game);
}

beg();
// playbutton.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
// });