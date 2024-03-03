const colors = [
    'red', 'blue', 'yellow', 'green'
]

let level = 0
let highScore = 0
let colorsPattern = []
const playBtn = document.getElementById('play')


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function addColor() {
    colorsPattern.push(getRandomColor());
}

const greenBtn = document.querySelector(".green");
const redBtn = document.querySelector(".red");
const blueBtn = document.querySelector(".blue");
const yellowBtn = document.querySelector(".yellow");

function handleClick() {
    const color = this.getAttribute('data-tile');
}

function flash(tile){
    const selectedColor = document.querySelector(`.${tile}`)
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            selectedColor.classList.remove('inactive')
            setTimeout(() => {
                selectedColor.classList.add('inactive')
                resolve()
            }, 500);
        }, 1000)
        
    })
}



function main() {
    addColor()
    for (let tile of colorsPattern) {
        flash(tile) 
    }
}

playBtn.addEventListener('click', main)

const board = document.querySelector(".board")

board.classList.remove("unclickable")