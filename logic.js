let players = ["x", "o"];
let activePlayer = 0;
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function checkWinner() {
    // Горизонтали, вертикали
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return true;
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return true;
    }
    // Диагонали
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return true;
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return true;

    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') return false; // есть пустая клетка
        }
    }
    return true;
}

function startGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    activePlayer = 0;
    renderBoard(board);
}

function click(row, col) {
    if (board[row][col] !== '') return;

    board[row][col] = players[activePlayer];
    renderBoard(board);

    if (checkWinner()) {
        showWinner(activePlayer);
        return;
    }


    if (checkDraw()) {
        return;
    }

    activePlayer = activePlayer === 0 ? 1 : 0;
}
