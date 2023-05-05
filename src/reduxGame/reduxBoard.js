import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {fillSquare, selectHistory, selectCurrentBoard} from '../features/historySlice'
import {increment, selectStepNumber} from '../features/stepNumberSlice'


import SquareExtern  from '../Square';

const ReduxBoard = (props) => {
  const dispatch = useDispatch();
  const newHistory = useSelector(selectHistory);
  const currentBoard = useSelector(selectCurrentBoard);

  const handleClick = (i) => {
    dispatch(fillSquare(i))
    // bug, incrementa aunque cliquee una casilla ya cliqueada
    // puedo controlar el board aca, y chequear si hay winner o esta seleccionado, pero me parece feo (vuelvo a repetir codigo)
    dispatch(increment())

  }

  // Check that, in react inspector, Square component is named as Square instead of SquareExtern
  const renderSquare = (index) => {
    return <SquareExtern
            value={currentBoard[index]}
            onClick={() => handleClick(index)}
          />
  }

  const SquarePersonalized = ({index}) => {
    return <SquareExtern
            value={currentBoard[index]}
            onClick={() => handleClick(index)}
          />
  }

  return (
    <div>
      <div className="board-row">
        <SquarePersonalized index={0} />
        <SquarePersonalized index={1} />
        <SquarePersonalized index={2} />
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


export { ReduxBoard };
