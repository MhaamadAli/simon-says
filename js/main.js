const colors = ["red", "green", "blue", "yellow"];
let colorPattern = [];
let userPattern = [];
let level = 0;
let highScore = 0;

const board = document.querySelector(".board");
const highScoreLabel = document.getElementById("high-score");
const levelLabel = document.getElementById("level");
const playBtn = document.getElementById("play");

function playSound(color) {
    const audio = new Audio(`./sounds/${color}.mp3`);
    audio.play();
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * 4)];
}

function addToPattern() {
    colorPattern.push(getRandomColor());
}



function disableUserClicks() {
    board.classList.add("unclickable");
}

function enableUserClicks() {
    board.classList.remove("unclickable");
}



playBtn.addEventListener("click", () => {
    playBtn.textContent = "RESTART";
    resetGame();
    addToPattern();
    highlightPattern();
});

document.querySelectorAll(".tile").forEach(tile => {
    tile.addEventListener("click", handleTileClick);
});
