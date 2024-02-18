function setToX(x) {
    console.log(x);
    let y = document.getElementById(x);
    let turn = document.getElementById("playerIcon").textContent;
    console.log(turn);
    if (turn == 'X') {
        y.textContent = 'X';
        turn = 'O'
        console.log("changed to X");
    }
    else {
        y.textContent = 'O';
        turn = 'X'
        console.log("Changed to O");
    }
    playerIcon.textContent = turn;
}

function resetBoard() {
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).innerHTML = i;
    }
    console.log("Board Reset");
}