function setToX(x) {
    console.log(x);
    let y = document.getElementById(x);
    y.textContent = 'X';
}

function resetBoard() {
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).innerHTML = i;
    }
    console.log("Board Reset");
}