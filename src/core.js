import { calculateNewTime } from './calculation.js'

let countdown;

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

const initialTime = '25:00';
const finishedTime = '00:00';
const time = document.getElementById('time');

const isFinished = (startTime) => startTime === finishedTime;
const finishTimer = () => {
  stopPomodoro();
  return finishedTime;
};

const updateTime = () => {
  const startTime = time.textContent;
  time.textContent = isFinished(startTime) ? finishTimer() : calculateNewTime(startTime);
};

const startPomodoro = () => {
  countdown = countdown || setInterval(updateTime, 1000);
};

const stopPomodoro = () => {
  clearInterval(countdown);
  countdown = undefined;
};

const resetPomodoro = () => {
  stopPomodoro();
  time.textContent = initialTime;
};

startButton.addEventListener('click', startPomodoro);
stopButton.addEventListener('click', stopPomodoro)
resetButton.addEventListener('click', resetPomodoro);
