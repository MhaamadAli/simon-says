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

function highlightColorTile(color) {
    const tile = document.querySelector(`[data-tile="${color}"]`);
    tile.classList.remove("inactive");
    playSound(color);
    setTimeout(() => {
        tile.classList.add("inactive");
    }, 500);
}

function highlightPattern() {
    disableUserClicks();
    let i = 0;
    const interval = setInterval(() => {
        if (i >= colorPattern.length) {
            clearInterval(interval);
            enableUserClicks();
            return;
        }
        highlightColorTile(colors[colorPattern[i]]);
        i++;
    }, 1000);
}

function addToPattern() {
    colorPattern.push(Math.floor(Math.random() * 4));
}


function resetGame() {
    colorPattern = [];
    userPattern = [];
    level = 0;
    updateScoreLabels();
    playBtn.textContent = "PLAY";
}

function checkUserPattern() {
    for (let i = 0; i < userPattern.length; i++) {
        if (userPattern[i] !== colorPattern[i]) {
            gameOver();
            return;
        }
    }
    if (userPattern.length === colorPattern.length) {
        if (level === 11) {
            gameWin();
            return;
        }
        level++;
        addToPattern();
        userPattern = [];
        updateScoreLabels();
        highlightPattern();
    }
}


function gameOver() {
    playSound("game-over");
    disableUserClicks();
    alert("Game Over! Try again.");
    resetGame();
}

function gameWin() {
    playSound("game-win");
    alert("Congratulations! You won!");
    resetGame();
}


function handleTileClick(event) {
    if (board.classList.contains("unclickable")) return;
    const color = event.target.dataset.tile;
    userPattern.push(colors.indexOf(color));
    highlightColorTile(color);
    checkUserPattern();
}

function disableUserClicks() {
    board.classList.add("unclickable");
}

function enableUserClicks() {
    board.classList.remove("unclickable");
}

function updateScoreLabels() {
    levelLabel.textContent = level;
    if (level > highScore) {
        highScore = level;
        highScoreLabel.textContent = highScore;
    }
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
