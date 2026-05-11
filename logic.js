let players = ["x", "o"];
let activePlayer = 0;
let board = [];

function checkWinner() {
    const winPatterns = [
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],
        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]]
    ];
    
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let val1 = board[a[0]][a[1]];
        let val2 = board[b[0]][b[1]];
        let val3 = board[c[0]][c[1]];
        
        if (val1 !== '' && val1 === val2 && val2 === val3) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function switchPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
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

function click(row, column) {
    if (board[row][column] !== '') {
        return;
    }
    
    board[row][column] = players[activePlayer];
    renderBoard(board);
    
    if (checkWinner()) {
        showWinner(activePlayer);
        return;
    }
    
    if (checkDraw()) {
        showWinner(-1); 
        return;
    }
    
    switchPlayer();
}