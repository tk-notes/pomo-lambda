import { first, second } from '../src/collection.js';

test('gets first element from an array', () => {
  expect(first([1, 2])).toBe(1);
});
