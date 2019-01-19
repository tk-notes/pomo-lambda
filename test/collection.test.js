import { first, second } from '../src/collection.js';

test('gets the first element from an array', () => {
  expect(first([1, 2])).toBe(1);
});

test('gets the second element from an array', () => {
  expect(second([1, 2])).toBe(2);
});

describe('with an empty array', () => {
  test('gets undefined', () => {
    expect(first([])).toBeUndefined();
  });

  test('gets undefined', () => {
    expect(second([])).toBeUndefined();
  });
});

describe('with only one element in the array', () => {
  test('gets undefined', () => {
    expect(second([1])).toBeUndefined();
  })
});
