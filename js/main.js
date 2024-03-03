const colors = [
    'red', 'blue', 'yellow', 'green'
]

let level = 1
let highScore = 0
let soundColors = []


function getRandomSound(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}


for (let i = 0; i < level; i++) {
    soundColors.push(getRandomSound(colors))
}

function playSounds() {
    for (let i = 0; i < soundColors.length; i++) {
        setTimeout(function() {
            let sound = new Audio(`../sounds/${soundColors[i]}.mp3`)
            sound.play()
        }, i * 1000)
    }
}
document.getElementById('play').addEventListener('click', playSounds)



