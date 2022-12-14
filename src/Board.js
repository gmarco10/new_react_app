import React from 'react';
import SquareExtern  from './Square';

const Board = (props) => {
  // Check that, in react inspector, Square component is named as Square instead of SquareExtern
  const renderSquare = (i) => {
    return <SquareExtern
            value={props.squares[i]}
            onClick={() => props.onClick(i)}
          />
  }

  const SquarePersonalized = (params) => {
    let index = params['i']
    return <SquareExtern
            value={props.squares[index]}
            onClick={() => props.onClick(index)}
          />
  }

  return (
    <div>
      <div className="board-row">
        <SquarePersonalized i={0} />
        <SquarePersonalized i={1} />
        <SquarePersonalized i={2} />
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export { Board };
