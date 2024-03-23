function Cell() {
    let value = " ";
    let winner = false;
    let coor = -1;
    const setCoor = (val) => { coor = val };
    const getCoor = () => coor;
    const setWin = () => { winner = true };
    const getWin = () => winner;
    const getval = () => value;
    const addval = (val) => {
        value = val;
    };
    const reset = () => {
        value = " ";
        winner = false;
    };
    return { getval, addval, reset, setWin, getWin, setCoor, getCoor };
}


function gameBoard() {
    const board = [];
    for (let i = 0; i < 3; ++i) {
        const arb = [];
        for (let j = 0; j < 3; ++j) {
            const cell = Cell();
            cell.setCoor((i * 3) + j + 1);
            arb.push(cell);
        }
        board.push(arb);
    }
    const resetBoard = () => {
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                board[i][j].reset();
            }
        }
    };
    const getBoard = () => board;
    const setCell = (player, value) => { board[Math.trunc((value - 1) / 3)][(value - 1) % 3].addval(player.getToken()); };
    const checkWinner = () => {
        let status = 0;
        for (let i = 0; i < 3; ++i) {
            if (board[i][0].getval() !== " " && board[i][0].getval() === board[i][1].getval() && board[i][1].getval() === board[i][2].getval()) {
                status = 1;
                board[i][0].setWin();
                board[i][1].setWin();
                board[i][2].setWin();
                return status;
            }
        }

        for (let i = 0; i < 3; ++i) {
            if (board[0][i].getval() !== " " && board[0][i].getval() === board[1][i].getval() && board[1][i].getval() === board[2][i].getval()) {
                status = 1;
                board[0][i].setWin();
                board[1][i].setWin();
                board[2][i].setWin();
                return status;
            }
        }
        if (board[0][0].getval() !== " " && board[0][0].getval() === board[1][1].getval() && board[1][1].getval() === board[2][2].getval()) {
            status = 1;
            board[0][0].setWin();
            board[1][1].setWin();
            board[2][2].setWin();
            return status;
        }

        if (board[0][2].getval() !== " " && board[0][2].getval() === board[1][1].getval() && board[1][1].getval() === board[2][0].getval()) {
            status = 1;
            board[0][2].setWin();
            board[1][1].setWin();
            board[2][0].setWin();
            return status;
        }
        return status;
    };

    return { resetBoard, getBoard, setCell, checkWinner };
}

function Player() {
    let pname = "";
    let token = "";
    const setName = (playerName) => {
        pname = playerName;
    };
    const setToken = (tokenval) => {
        token = tokenval;
    };

    const getToken = () => token;
    const getName = () => pname;
    return { setName, setToken, getName, getToken };

}
function gameController() {
    const board = gameBoard();
    const p1 = Player();
    const p2 = Player();
    p1.setToken("X");
    p2.setToken("O");
    let turn = p1;
    let turncnt = 0;
    let winner = null;
    let gameStatus = 0;
    const getStatus = () => gameStatus;
    const resetGame = () => {
        board.resetBoard();
        turn = p1;
        gameStatus = 0;
        winner = null;
        turncnt = 0;
    };

    const newGame = (p1Name, p2Name) => {
        p1.setName(p1Name);
        p2.setName(p2Name);
        p1.setToken("X");
        p2.setToken("O");
        resetGame();
    };
    const getWinner = () => winner.getName();
    const getBoard = () => board.getBoard();
    const switchTurn = () => { turn = (turn === p1) ? p2 : p1; };
    const getTurnName = () => turn.getName();
    const playRound = (value) => {
        if (board.getBoard()[Math.trunc((value - 1) / 3)][(value - 1) % 3].getval() === " ") {
            board.setCell(turn, value);
            turncnt++;
            const winstat = board.checkWinner();
            console.log(winstat);
            if (winstat === 0) {
                if (turncnt === 9) {
                    gameStatus = 1;
                }
            }
            else {
                gameStatus = 2;
                winner = turn;
            }
            switchTurn();
        }
    };

    return { newGame, resetGame, playRound, getStatus, getBoard, getTurnName, getWinner };

}

screenControl = (function ScreenController() {
    const game = gameController();
    let active = false;
    const renderBoard = (() => {
        const playground = document.querySelector(".playground");
        for (let i = 0; i < 9; ++i) {
            const box = document.createElement("button");
            box.classList.add("board-box");
            box.setAttribute("id", `box-${i + 1}`);
            box.textContent = game.getBoard()[Math.trunc(i / 3)][i % 3].getval();
            playground.appendChild(box);
        }
    })();

    const updateBoard = () => {
        for (let i = 0; i < 9; ++i) {
            const box = document.querySelector(`#box-${i + 1}`);
            box.setAttribute("class", "board-box");
            box.textContent = game.getBoard()[Math.trunc(i / 3)][i % 3].getval();
            if (game.getBoard()[Math.trunc(i / 3)][i % 3].getWin()) {
                box.classList.add("winner");
            }
        }
    };
    const setoutput = (out) => {
        document.querySelector(".output-window").textContent = out;
    };

    document.querySelector(".play-form").addEventListener('submit', (event) => {
        event.preventDefault();
        p1name = document.querySelector("#p1-name").value
        p2name = document.querySelector("#p2-name").value
        game.newGame(p1name, p2name);
        updateBoard();
        setoutput(`${game.getTurnName()}'s turn!`);
        if (!active) {
            playgame();
        }
        active = true;
    });

    document.querySelector(".reset").addEventListener("click", (event) => {
        game.resetGame();
        updateBoard();
        setoutput(`${game.getTurnName()}'s turn!`);
    });

    const playgame = () => {
        document.querySelectorAll(".board-box").forEach(
            (element) => {
                element.addEventListener("click", (event) => {
                    if (game.getStatus() === 0) {
                        const val = parseInt(event.target.id.split("-")[1]);
                        console.log(`Box hit: ${val}`);
                        game.playRound(val);
                        event.target.textContent = game.getBoard()[Math.trunc((val - 1) / 3)][(val - 1) % 3].getval();
                        if (game.getStatus() === 0) {
                            setoutput(`${game.getTurnName()}'s turn!`);
                        }
                        else if (game.getStatus() === 1) {
                            setoutput("It's a Draw!");
                        }
                        else {
                            setoutput(`${game.getWinner()} won!`);
                            updateBoard();
                        }
                    }
                });
            }
        );
    };
})();

