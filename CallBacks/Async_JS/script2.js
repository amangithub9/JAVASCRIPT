let intervalID;

const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')


startBtn.addEventListener("click", startPrinting)
stopBtn.addEventListener("click", stopPrinting)

function startPrinting() {
    // console.log("Start");
    intervalID = setInterval(function () {
        console.log("Start");
    }, 1000)
}

function stopPrinting() {
    console.log("Stop");
    clearInterval(intervalID);
}