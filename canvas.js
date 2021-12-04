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
    let seed = 0 // 变化值 初始值
    const strike = 1 // 每帧间隔
    setInterval(()=>{
        // renderCircle(canvas, seed)
        renderRect(canvas, seed)
        seed = seed + (strike * direction)
        if (seed < 0){
            direction = 1
        }
        if (seed > 25 ){
            direction = -1
        }
    }, 1000/30)
}

function renderCircle(canvas, seed){
    canvas.closePath()
    for (let i=0;i<15;i++){
        for(let j=0; j<25; j++){
            canvas.beginPath()
            canvas.arc(base.x + grid + ball.x + j * ball.radius * 3, base.y + grid * i + ball.y, ball.radius, 0,Math.PI * 2 / 250 * seed, true)
            canvas.fillStyle = `rgba(${i * i * 0.3 * i + seed},${j * j*  2 + seed},${10 * j}, 1)`
            canvas.fill()
            // canvas.strokeStyle = `rgba(${i * i * 0.3 * i + root},${j * j*  2 + root},${10 * j}, 1)`
            // canvas.stroke()
            canvas.closePath()
        }
    }
}

function renderRect(canvas, seed){
    console.clear()
    const offsetPosition = 100 // 位置偏移量
    const offsetColor = 15 // 颜色偏移量
    const rectSize = [200, 200] // rect Size
    const countRect = 20 // rect 数量
    clearFrame(canvas)
    for(let i=0; i<20; i++){
        console.log(seed * 7 + offsetColor * i, 100 + i * offsetPosition)
        canvas.fillRect(100 + i * offsetPosition, 100 + i * offsetPosition, rectSize[0],rectSize[1])
        canvas.fillStyle = `rgba(
            ${seed * 10 + offsetColor * i }, 
            ${seed * 10 + offsetColor * i }, 
            ${seed * 10 + offsetColor * i }, 1)`
        canvas.fill()
        canvas.strokeRect(100 + i * offsetPosition, 100 + i * offsetPosition, rectSize[0],rectSize[1])
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
