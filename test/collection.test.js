import { first, second } from '../src/collection.js';

test('gets the first element from an array', () => {
  expect(first([1, 2])).toBe(1);
});

test('gets the second element from an array', () => {
  expect(second([1, 2])).toBe(2);
});
