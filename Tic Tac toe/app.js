let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;

        if (checkWinner()) {
            document.getElementById('result').innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (gameBoard.every(cell => cell !== '')) {
            document.getElementById('result').innerText = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]               // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    const cells = document.getElementById('board').children;
    for (const cell of cells) {
        cell.innerText = '';
    }

    document.getElementById('result').innerText = '';
}
