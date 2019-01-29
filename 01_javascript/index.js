const timer = document.querySelector('.timer');

const buttons = {
    start: document.querySelector('.start.button'),
    stop: document.querySelector('.stop.button'),
    reset: document.querySelector('.reset.button'),
    plus: document.querySelector('.plus.button'),
    minus: document.querySelector('.minus.button'),
};

timer.textContent = '00:00';
let startDate = new Date(),
    marker = false;

function startTIME() {
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
};
buttons.start.addEventListener('click', event => {
    marker = false;
    let timerId = setInterval(function startTime() {
        if (marker) {
            clearInterval(timerId);
        }
        let thisDate = new Date();
        let t = thisDate.getTime() - startDate.getTime();
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
});
buttons.reset.addEventListener('click', event => {
    timer.textContent = '00:00';
    startDate = new Date();
    marker = true;
});
buttons.stop.addEventListener('click', event => {
    marker = true;
    startDatePause = startDate;
});
buttons.minus.addEventListener('click', event => {
    startDate += 10000;
    if (startDate.getTime() < 0) startdate = 0;
});
buttons.plus.addEventListener('click', event => {
    startDate -= 10000;
});