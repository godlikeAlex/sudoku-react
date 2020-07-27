import { Numbers, Square } from 'typings';

interface Iinput {
  square: Square;
  value: Numbers;
}

function isInSquare({ square, value }: Iinput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;
