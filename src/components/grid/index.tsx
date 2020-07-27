import React, { FC } from 'react';
import { Container, Row } from './styles';
import Block from './block';
import { fillGrid } from 'utils';
import { Grid as GridT } from 'typings';

const Grid: FC = () => {
  const grid: GridT = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  fillGrid(grid);
  console.log(grid);
  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container" key={rowIndex}>
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block {...{ rowIndex, colIndex }} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
