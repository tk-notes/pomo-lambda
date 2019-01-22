import { compose } from './fp.js';
import { mod60, isZero } from './math.js'
import { first, second } from './collection.js'
import { splitByColon, toString } from './string.js'

const getHour = compose(first, splitByColon);
const getMinute = compose(second, splitByColon);

const singleDigitNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const isSingleDigit = (numberText) => singleDigitNumbers.includes(numberText);
const addPrefixDigit = (numberText) => isSingleDigit(numberText) ? `0${numberText}` : numberText;

const nextMinuteNumber = (number) => mod60(number - 1);
const nextHourNumber = (number) => isZero(number) ? number : number - 1;

const nextMinute = compose(addPrefixDigit, toString, nextMinuteNumber, Number);
const nextHour = compose(addPrefixDigit, toString, nextHourNumber, Number);

const passedOneMinute = (minute) => minute == '59';

const calculateNewTime = (startTime) => {
  const hour = getHour(startTime);
  const minute = getMinute(startTime);

  const newMinute = nextMinute(minute);
  const newHour = passedOneMinute(newMinute) ? nextHour(hour) : hour;

  return `${newHour}:${newMinute}`;
};

export {
  getHour,
  getMinute,
  isSingleDigit,
  addPrefixDigit,
  nextHourNumber,
  nextMinuteNumber,
  nextHour,
  nextMinute,
  calculateNewTime
};
