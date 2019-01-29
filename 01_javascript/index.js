const timer = document.querySelector('.timer');

const buttons = {
    start: document.querySelector('.start.button'),
    stop: document.querySelector('.stop.button'),
    reset: document.querySelector('.reset.button'),
    plus: document.querySelector('.plus.button'),
    minus: document.querySelector('.minus.button'),
};
timer.textContent = '00:00';
let startDate = new Date();
let isTimerRunning = false,
    isStopClick = false;

function startClick() {
    isTimerRunning = false;
    if (!isStopClick) { startDate = new Date(); }
    isStopClick = false;
    startTimer = setInterval(function startTime() {
        if (isTimerRunning) clearInterval(startTimer);
        let thisDate = new Date();
        let t = thisDate.getTime() - startDate;
        t = Math.floor(t / 1000);
        let s = t % 60;
        t -= s;
        t = Math.floor(t / 60);
        let m = t % 60;
        t -= m;
        t = Math.floor(t / 60);
        let h = t % 60;
        if (h < 10) h = h;
        if (m < 10) m = m;
        if (s < 10) s = '0' + s;
        timer.textContent = h.toString() + m.toString() + ':' + s.toString();
    }, 1000);
}

function resetClick() {
    timer.textContent = '00:00';
    isTimerRunning = true;
};

function stopClick() {
    isTimerRunning = true;
    startDate = new Date();
};

function minusClick() {
    let testDate = new Date();
    if (testDate - startDate < 10000) { startdate = 0; } else {
        startDate += 10000;
    }
};

function plusClick() {
    startDate -= 10000;
}
buttons.start.addEventListener('click', startClick);
buttons.reset.addEventListener('click', resetClick);
buttons.stop.addEventListener('click', stopClick);
buttons.minus.addEventListener('click', minusClick);
buttons.plus.addEventListener('click', plusClick);