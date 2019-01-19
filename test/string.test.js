import { splitByColon, toString } from '../src/string.js';

describe('splitByColon', () => {
  test('with colon', () => {
    expect(splitByColon('25:00')).toEqual(['25', '00']);
  });

  test('without colon', () => {
    expect(splitByColon('2500')).toEqual(['2500']);
  });

  test('with an empty string', () => {
    expect(splitByColon('')).toEqual(['']);
  });
});

describe('toString', () => {
  test('positive number', () => {
    expect(toString(25)).toEqual('25');
  });

  test('zero', () => {
    expect(toString(0)).toEqual('0');
  });

  test('negative number', () => {
    expect(toString(-1)).toEqual('-1');
  });
});
