let gameEnd = false;
let countPlayer = 0;
let countComputer = 0;
function gameStart() {
    if (gameEnd) return;
    document.getElementById("inputName").disabled = true;
    player = Math.floor(Math.random()*10);
    computer = Math.floor(Math.random()*10);
    const playerName = document.getElementById("inputName").value;
    if (playerName === "") document.getElementById("playerName").innerHTML = "NoName";
    else document.getElementById("playerName").innerHTML = playerName;
    document.getElementById("player").innerHTML = player;
    document.getElementById("computer").innerHTML = computer;
    if (player>computer){
        countPlayer++;
        document.getElementById("resGame").innerHTML = `${document.getElementById("playerName").innerHTML} takes the point!`;
    }
    else if(computer>player){
        countComputer++;
        document.getElementById("resGame").innerHTML = "Computer takes the point!";
    }
    else document.getElementById("resGame").innerHTML = "Draw!";
    document.getElementById("countPlayer").innerHTML = countPlayer;
    document.getElementById("countComputer").innerHTML = countComputer;
    if (countPlayer === 3){
        document.getElementById("resGame").innerHTML = `${playerName} wins!`;
        gameEnd = true;
    } else if (countComputer === 3){
        document.getElementById("resGame").innerHTML = "Computer wins!";
        gameEnd = true;
    }
}
function resetGame() {
    document.getElementById("inputName").disabled = false;
    countPlayer = 0;
    countComputer = 0;
    document.getElementById("countPlayer").innerHTML = 0;
    document.getElementById("countComputer").innerHTML = 0;
    gameEnd = false;
    document.getElementById("player").innerHTML = 0;
    document.getElementById("computer").innerHTML = 0;
    document.getElementById("resGame").innerHTML = "";
}