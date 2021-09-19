const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const sizeValue = document.getElementById('size');
const clear = document.getElementById('clear');
const colorys = document.getElementById('color');

let size = 20;
let isPressed = false;
let color = 'black';
let x;
let y;

colorys.addEventListener('click', () => {
    color = colorys.value;
    console.log(color);
});

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    size = 20;
    color = 'black';
    colorys.value = color;
    sizeValue.innerText = size;
});

increase.addEventListener('click', () => {
    if (size < 40) {
        size++;
    }
    sizeValue.innerText = size;
});

decrease.addEventListener('click', () => {
    if (size != 1) {
        size--;
    } else {
        size = 1;
    }
    sizeValue.innerText = size;

});

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;

});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;

});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2, size);
        drawLine(x, y, x2, y2, size);
        x = x2;
        y = y2;
    }
});

function drawCircle(x, y, size) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}


function drawLine(x1, y1, x2, y2, size) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();


}

