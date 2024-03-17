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
    if (checkDraw(1, 2, 3, 4, 5, 6, 7, 8, 9)) {
        alert("Draw");
        resetBoard();
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

function checkDraw(a, b, c, d, e, f, g, h, i) {
    cellA = document.getElementById(a).textContent
    cellB = document.getElementById(b).textContent
    cellC = document.getElementById(c).textContent
    cellD = document.getElementById(d).textContent
    cellE = document.getElementById(e).textContent
    cellF = document.getElementById(f).textContent
    cellG = document.getElementById(g).textContent
    cellH = document.getElementById(h).textContent
    cellI = document.getElementById(i).textContent
    return cellA != "1" && cellB != "2" && cellC != "3" && cellD != "4" && cellE != "5" && cellF != "6" && cellG != "7" && cellH != "8" && cellI != "9"
}