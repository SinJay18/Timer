const minutesContainer = document.querySelector('.counter__minutes');
const secondsContainer = document.querySelector('.counter__seconds');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
let interval;
let minutes = 0;
let seconds = 0;

minutesContainer.textContent = '0' + minutes;
secondsContainer.textContent = '0' + seconds;

const runTimer = () => {
    seconds++;
    secondsContainer.textContent = seconds;

    if(seconds <= 9){
        secondsContainer.textContent = `0${seconds}`;
    }
    if(seconds >= 59){
        minutes++;
        minutesContainer.textContent = minutes;
        seconds = 0;
    }
    if(minutes <= 9){
        minutesContainer.textContent = `0${minutes}`;
    }
}

startBtn.addEventListener('click', (event) =>{
    clearInterval(interval); // --предотвращает ускорение времени при множественном нажатии кнопки Start
    interval = setInterval(runTimer, 1000)
})

pauseBtn.addEventListener('click', (event) =>{
    clearInterval(interval);
    startBtn.textContent = 'Continue'
})

resetBtn.addEventListener('click', (event) =>{
    clearInterval(interval);
    minutes = 0;
    seconds = 0;

    minutesContainer.textContent = '00';
    secondsContainer.textContent = '00';

    startBtn.textContent = 'Start'
})