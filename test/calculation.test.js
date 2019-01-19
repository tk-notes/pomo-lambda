import * as calc from '../src/calculation.js';

describe('getHour', () => {
  test('gets hour from string time', () => {
    expect(calc.getHour('25:00')).toEqual('25');
    expect(calc.getHour('15:00')).toEqual('15');
    expect(calc.getHour('00:00')).toEqual('00');
  });
});

describe('getMinute', () => {
  test('gets minute from string time', () => {
    expect(calc.getMinute('25:00')).toEqual('00');
    expect(calc.getMinute('15:00')).toEqual('00');
    expect(calc.getMinute('00:00')).toEqual('00');
    expect(calc.getMinute('00:58')).toEqual('58');
    expect(calc.getMinute('00:27')).toEqual('27');
  });
});

describe('isSingleDigit', () => {
  test('verify if number is a single digit', () => {
    expect(calc.isSingleDigit('1')).toBeTruthy();
    expect(calc.isSingleDigit('2')).toBeTruthy();
    expect(calc.isSingleDigit('3')).toBeTruthy();
    expect(calc.isSingleDigit('4')).toBeTruthy();
    expect(calc.isSingleDigit('5')).toBeTruthy();
    expect(calc.isSingleDigit('-1')).toBeFalsy();
    expect(calc.isSingleDigit('10')).toBeFalsy();
    expect(calc.isSingleDigit('59')).toBeFalsy();
  });
});

describe('addPrefixDigit', () => {
  test('adds a zero prefix to single digit numbers', () => {
    expect(calc.addPrefixDigit('1')).toEqual('01');
    expect(calc.addPrefixDigit('2')).toEqual('02');
    expect(calc.addPrefixDigit('10')).toEqual('10');
  });
});

describe('nextHourNumber', () => {
  test('decreases a number by 1', () => {
    expect(calc.nextHourNumber(1)).toEqual(0);
    expect(calc.nextHourNumber(0)).toEqual(0);
    expect(calc.nextHourNumber(40)).toEqual(39);
  });
});

describe('nextMinuteNumber', () => {
  test('decreases number by 1', () => {
    expect(calc.nextMinuteNumber(1)).toEqual(0);
    expect(calc.nextMinuteNumber(40)).toEqual(39);
  });

  test('jumps to 59 if number is zero', () => {
    expect(calc.nextMinuteNumber(0)).toEqual(59);
  });
});

describe('nextHour', () => {
  test('gets next hour string', () => {
    expect(calc.nextHour('10')).toEqual('09');
    expect(calc.nextHour('02')).toEqual('01');
    expect(calc.nextHour('01')).toEqual('00');
    expect(calc.nextHour('22')).toEqual('21');
  });
});

describe('nextMinute', () => {
  test('gets next minute string', () => {
    expect(calc.nextMinute('10')).toEqual('09');
    expect(calc.nextMinute('02')).toEqual('01');
    expect(calc.nextMinute('01')).toEqual('00');
    expect(calc.nextMinute('22')).toEqual('21');
  });
});

describe('calculateNewTime', () => {
  test('gets the next countdown time', () => {
    expect(calc.calculateNewTime('10:10')).toEqual('10:09');
    expect(calc.calculateNewTime('10:00')).toEqual('09:59');
    expect(calc.calculateNewTime('25:00')).toEqual('24:59');
    expect(calc.calculateNewTime('00:01')).toEqual('00:00');
  });
});
