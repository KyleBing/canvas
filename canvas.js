const ball = {
    radius: 100,
    x: 10,
    y: 10
}
let grid = ball.radius * 3
let base = {
    x: 100,
    y: 100
}
window.onload = () => {
    setFrame()
    let canvas = getCanvas().getContext('2d')
    let direction = 1 // 变化方向
    let root = 0 // 变化值 初始值
    const strike = 1 // 每帧间隔
    setInterval(()=>{
        // render(canvas, root)
        renderRect(canvas, root)
        root = root + (strike * direction)
        if (root < 0){
            direction = 1
        }
        if (root > 15 ){
            direction = -1
        }
    }, 1000/5)
}

function render(canvas, root){
    canvas.closePath()
    for (let i=0;i<15;i++){
        for(let j=0; j<25; j++){
            canvas.beginPath()
            canvas.arc(base.x + grid + ball.x + j * ball.radius * 3, base.y + grid * i + ball.y, ball.radius, 0,Math.PI * 2 / 250 * root, true)
            canvas.fillStyle = `rgba(${i * i * 0.3 * i + root},${j * j*  2 + root},${10 * j}, 1)`
            canvas.fill()
            // canvas.strokeStyle = `rgba(${i * i * 0.3 * i + root},${j * j*  2 + root},${10 * j}, 1)`
            // canvas.stroke()
            canvas.closePath()
        }
    }
}

function renderRect(canvas, root){
    console.clear()
    const offsetPosition = 80 // 位置偏移量
    const offsetColor = 60 // 颜色偏移量
    clearFrame(canvas)
    for(let i=0; i<4; i++){
        console.log(root * 7 + offsetColor * i, 100 + i * offsetPosition)
        canvas.fillRect(100 + i * offsetPosition, 100 + i * offsetPosition, 200,200)
        canvas.fillStyle = `rgba(
            ${root * 7 + offsetColor * i }, 
            ${root * 7 + offsetColor * i }, 
            ${root * 7 + offsetColor * i }, 1)`
        canvas.fill()
        canvas.strokeRect(100 + i * offsetPosition, 100 + i * offsetPosition, 200,200)
        canvas.strokeStyle = 'rgba(0,0,0,0.5)'
        canvas.stroke()
    }
}

function clearFrame(canvas){
    const ppi = 4
    canvas.clearRect(0,0, innerWidth * ppi, innerHeight * ppi)
}

function setFrame(){
    let canvas = getCanvas()
    const ppi = 4
    canvas.style.height = innerHeight + 'px'
    canvas.style.width = innerWidth + 'px'
    canvas.setAttribute('height', innerHeight * ppi)
    canvas.setAttribute('width', innerWidth * ppi)
}

function getCanvas(){
    return document.querySelector('#canvas')
}
