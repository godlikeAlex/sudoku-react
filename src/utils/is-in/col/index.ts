import { Grid, Numbers } from 'typings';

interface Iinput {
  col: number;
  grid: Grid;
  value: Numbers;
}

function isInCol({ grid, col, value }: Iinput): boolean {
  for (let i = 0; i < 9; i++) if (value === grid[i][col]) return true;
  return false;
}

export default isInCol;
