import { calculateNewTime } from './calculation.js'

let countdown;

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

const initialTime = '25:00';
const time = document.getElementById('time');

const updateTime = () => {
  let startTime = time.textContent;
  time.textContent = calculateNewTime(startTime);
};

const startPomodoro = () => countdown = setInterval(updateTime, 1000);;
const stopPomodoro = () => clearInterval(countdown);
const resetPomodoro = () => time.textContent = initialTime;

startButton.addEventListener('click', startPomodoro);
stopButton.addEventListener('click', stopPomodoro)
resetButton.addEventListener('click', resetPomodoro);
