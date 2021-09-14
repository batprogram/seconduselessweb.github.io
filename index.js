const canvas = document.querySelector('canvas')
const secondsCount = document.querySelector(".seconds")
const context = canvas.getContext('2d')
const dickDimensions = {width: 860 * 1.2, height: 830 * 1.2} 

const startTime = Date.now()

canvas.width = window.innerWidth
canvas.height = window.innerHeight
context.translate(window.innerWidth/2, window.innerHeight/2)

const image = new Image()
image.src = './dick.png'

const loopingDicks = 120
const offsetDistance = 100
let currentOffset = 0

image.onload = () => {
    startLooping();
};

function draw(offset) {
    context.drawImage(image, 
        -dickDimensions.width/2 - offset/2, 
        -dickDimensions.height/2 - offset/2, 
        dickDimensions.width + offset, 
        dickDimensions.height + offset);
}



function loopDraw() {
for(let i = loopingDicks; i >= 0; i-- ) {
    draw(i * offsetDistance + currentOffset)
}


currentOffset++
if(currentOffset >= offsetDistance){
    currentOffset = 0
}

const newTime = (Math.floor((Date.now() - startTime) / 1000))

secondsCount.innerText = newTime

requestAnimationFrame(loopDraw)
}

function startLooping(){
    requestAnimationFrame(loopDraw)
}

