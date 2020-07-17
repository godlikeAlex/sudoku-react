import { Grid, Numbers } from 'typings';

interface Iinput {
  grid: Grid;
  row: number;
  value: Numbers;
}

function isInRow({ grid, row, value }: Iinput): boolean {
  return grid[row].includes(value);
}

export default isInRow;
