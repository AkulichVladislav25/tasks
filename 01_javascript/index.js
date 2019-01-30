const timer = document.querySelector('.timer');

const buttons = {
    start: document.querySelector('.start.button'),
    stop: document.querySelector('.stop.button'),
    reset: document.querySelector('.reset.button'),
    plus: document.querySelector('.plus.button'),
    minus: document.querySelector('.minus.button'),
    reverse: document.querySelector('.reverse.button'),
    save: document.querySelector('.save.button'),
};

timer.textContent = '00:00';
let currentTime = 0,
    isTimerRunning = true,
    isStartClick = false,
    oneSecond = 1000;

function calcTime(t) {
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
}

function startClick() {
    isTimerRunning = true;
    if (!isStartClick) {
        startTimer = setInterval(function startTime() {
            isStartClick = true;
            if (!isTimerRunning) {
                clearInterval(startTimer);
                currentTime -= oneSecond;
                isStartClick = false;
            }
            currentTime += oneSecond;
            //alert(currentTime);
            if (currentTime < 0) {
                currentTime = 0;
                isTimerRunning = false;
            }
            calcTime(currentTime);
        }, 1000);
    }
}

function resetClick() {
    isTimerRunning = false;
    isStartClick = false;
    currentTime = 0;
    timer.textContent = '00:00';
};

function stopClick() {
    isTimerRunning = false;
};

function minusClick() {
    currentTime -= 10000;
    if (currentTime < 0) {
        currentTime = 0;
    }
    calcTime(currentTime);
};

function plusClick() {
    currentTime += 10000;
    calcTime(currentTime);
}

function reverseTimer() {
    oneSecond = -oneSecond;
}

document.body.onload = addElement;

function addElement() {
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(timer.textContent);
    newDiv.appendChild(newContent);
    let currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

function saveResults() {
    addElement;
}
buttons.start.addEventListener('click', startClick);
buttons.reset.addEventListener('click', resetClick);
buttons.stop.addEventListener('click', stopClick);
buttons.minus.addEventListener('click', minusClick);
buttons.plus.addEventListener('click', plusClick);
buttons.reverse.addEventListener("click", reverseTimer);
buttons.save.addEventListener("click", saveResults);