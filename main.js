function setToX(x) {
    console.log(x);
    let y = document.getElementById(x);
    let turn = document.getElementById("playerIcon").textContent;
    console.log(turn);
    if (turn == 'X' && y.textContent == x) {
        y.textContent = 'X';
        turn = 'O'
        console.log("changed to X");
    }
    else if (y.textContent == x) {
        y.textContent = 'O';
        turn = 'X'
        console.log("Changed to O");
    }
    playerIcon.textContent = turn;
    if (checkWin() == true) {
        {
            if (turn == 'X') {
                var turn1 = 'O';
            }
            else {
                var turn1 = 'X';
            }
            console.log(turn1 + " Win");
            alert(turn1 + " Won");
            resetBoard();
        }
    }
}

function resetBoard() {
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).innerHTML = i;
    }
    console.log("Board Reset");
}
function checkWin() {
    return check3Same(1, 2, 3) || check3Same(4, 5, 6) || check3Same(7, 8, 9) || check3Same(1, 5, 9) || check3Same(3, 5, 7) || check3Same(1, 4, 7) || check3Same(2, 5, 8) || check3Same(3, 6, 9)
}
function check3Same(a, b, c) {
    cellA = document.getElementById(a).textContent
    cellB = document.getElementById(b).textContent
    cellC = document.getElementById(c).textContent
    return cellA == cellB && cellB == cellC
}
