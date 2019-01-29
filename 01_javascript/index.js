const timer = document.querySelector('.timer');

const buttons = {
    start: document.querySelector('.start.button'),
    stop: document.querySelector('.stop.button'),
    reset: document.querySelector('.reset.button'),
    plus: document.querySelector('.plus.button'),
    minus: document.querySelector('.minus.button'),
};

timer.textContent = '00:00';

function startTIME(startDate) {
    alert(startDate);
    var thisDate = new Date();
    var t = thisDate.getTime() - startDate;

    t = Math.floor(t / 1000);
    var s = t % 60;
    t -= s;
    t = Math.floor(t / 60);
    var m = t % 60;
    t -= m;
    t = Math.floor(t / 60);
    var h = t % 60;
    if (h < 10) h = h;
    if (m < 10) m = m;
    if (s < 10) s = '0' + s;
    timer.textContent = h.toString() + m.toString() + ':' + s.toString();

};


buttons.start.addEventListener('click', event => {
    setTimeout('startTIME()', 1000, new Date());

});