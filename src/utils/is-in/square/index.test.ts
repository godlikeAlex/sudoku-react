import { Square } from 'typings';
import isInSquare from './index';

describe('isInSquare', () => {
  it('returns true when value is in grid row', () => {
    const square: Square = [
      [1, 3, 4],
      [8, 2, 7],
      [6, 9, 5],
    ];

    expect(isInSquare({ square, value: 1 })).toBeTruthy();
    expect(isInSquare({ square, value: 9 })).toBeTruthy();
  });

  it('returns false when value is not in grid row', () => {
    const square: Square = [
      [0, 3, 4],
      [8, 2, 7],
      [6, 5, 5],
    ];

    expect(isInSquare({ square, value: 1 })).toBeFalsy();
    expect(isInSquare({ square, value: 9 })).toBeFalsy();
  });
});
