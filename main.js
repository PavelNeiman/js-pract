var origBoard;
const huPlayer = '0';
const aiPlayer = 'X';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]

];

const cells = document.querySelectorAll('.cell');


// начало игры
function startGame() {

    document.querySelector('.endgame').style.display = "none";
    origBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false)
    }


}


//получаем клик игрока
function turnClick(square) {
	if (typeof origBoard[square.target.id] == 'number') {
		turn(square.target.id, huPlayer)
		if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer);
	}
}

function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(origBoard, player);
    if (gameWon) gameOver(gameWon);
}


// 20:14
// https://www.youtube.com/watch?v=P2TcQ3h0ipQ&index=6&list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V



// cheak win

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = { index: index, player: player };
            break;
        }
    }
    return gameWon;
}

// game over f
function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            gameWon.player == huPlayer ? "green" : "red";
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
        
    }

    declareWinner(gameWon.player == huPlayer ? "Красавчик" : "Писос! Ты проиграл ИИ, который я написал за 20 минут((")
}

function declareWinner(who){
    document.querySelector('.endgame').style.display = 'block';
    document.querySelector('.text').innerText = who;
}

function emptySquares(){
    return origBoard.filter(s => typeof s == 'number');
}

// ai spot's
function bestSpot(){
    return emptySquares()[0];
}


function checkTie(){
    if (emptySquares().length == 0){
        for(var i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = 'yellow';
            cells[i].removeEventListener('click'. turnClick, false)
        }
        declareWinner("Tie Game!")
        return true;
    }
    return false;
}