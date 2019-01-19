import { mod60 } from '../src/math.js';

describe('mod60', () => {
  test('various numbers modulo 60', () => {
    expect(mod60(59)).toEqual(59);
    expect(mod60(-1)).toEqual(59);
    expect(mod60(1)).toEqual(1);
    expect(mod60(60)).toEqual(0);
  });
});
