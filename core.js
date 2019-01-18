const button = document.getElementById('start-button');
const time = document.getElementById('time');

const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

const split = (separator) => (text) => text.split(separator);
const splitByColon = split(':');

const first = (list) => list[0];
const second = (list) => list[1];

const getHour = compose(first, splitByColon);
const getMinute = compose(second, splitByColon);

const mod = (divisor) => (dividend) => (((dividend) % divisor) + divisor) % divisor;
const mod60 = mod(60);

const toString = (number) => number.toString();
const sindleDigitNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const singleDigit = (numberText) => sindleDigitNumbers.includes(numberText);
const addPrefixDigit = (numberText) => singleDigit(numberText) ? `0${numberText}` : numberText;

const nextMinuteNumber = (number) => mod60(number - 1);
const nextHourNumber = (number) => number - 1;

const nextMinute = compose(addPrefixDigit, toString, nextMinuteNumber, Number);
const nextHour = compose(addPrefixDigit, toString, nextHourNumber, Number);

const passedOneMinute = (minute) => minute == '59';

const calculateNewTime = (startTime) => {
  let hour = getHour(startTime);
  let minute = getMinute(startTime);

  let newMinute = nextMinute(minute);
  let newHour = passedOneMinute(newMinute) ? nextHour(hour) : hour;

  return `${newHour}:${newMinute}`;
};

const updateTime = () => {
  let startTime = time.textContent;
  let newTimeText = calculateNewTime(startTime);
  time.textContent = newTimeText;
};

const startPomodoro = () => setInterval(updateTime, 1000);

button.addEventListener('click', startPomodoro);
