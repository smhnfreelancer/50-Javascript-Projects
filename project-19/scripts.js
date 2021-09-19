const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const needle = document.querySelector('.needle');
let secondsLap = 1;
let minutesLap = 1;
let hoursLap = 1;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = "Dark Mode";
    } else {
        html.classList.add('dark');
        e.target.innerHTML = "Light Mode";
    }
});



function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    let secondsScaled = (scale(seconds, 0, 60, 0, 360)) + secondsLap * 360;
    let minutesScaled = (scale(minutes, 0, 60, 0, 360)) + minutesLap * 360;
    let hoursScaled = (scale(hoursForClock, 0, 60, 0, 360)) + hoursLap * 360;
    let colon = `<span class="coloni">:</span>`;

    const date = time.getDate();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    if (seconds == 59) {
        secondsLap++;
    }
    if (minutes == 59) {
        secondsLap++;
    }
    if (hours == 59) {
        secondsLap++;
    }

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursScaled}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutesScaled}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondsScaled}deg)`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
    timeEl.innerHTML = `${hoursForClock == 0 ? `12` : `${hoursForClock}`}${colon}${minutes < 10 ? `0${minutes}` : minutes} ${ampm} `;


}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

setTime();

setInterval(setTime, 1000);