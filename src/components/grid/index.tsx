import React, { FC } from 'react';
import { Container, Row } from './styles';
import Block from './block';

const Grid: FC = () => {
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
