import React, { useCallback, useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {selectStepNumber, reset} from '../features/stepNumberSlice'
import {switchTheme, selectTheme} from '../features/themeSlice'

import {moveToStep, selectSteps} from '../features/historySlice'

import { Board } from '../Board';
import { ReduxBoard } from './reduxBoard';
import { ClickCounter } from '../ClickCounter';

function ReduxFunctionalGame() {
  const dispatch =  useDispatch();

  const theme = useSelector(selectTheme)
  const newStepNumber = useSelector(selectStepNumber);
  const historyLength = useSelector(selectSteps);

  // porque lo genero como un callback? asi solo se ejecuta cuando las variables en [] se modifican
  // asi evito la re-renderizacion innecesaria
  // PREGUNTA: porque tengo que agregar stepNumber
  // no es necesario agregar XIsNext
  // PREGUNTA: en que momento React sabe que le estoy pasando un parametro

  const resetToStep = (move) => {
    dispatch(moveToStep(move))
    dispatch(reset(move))
  }

  const reduxMoves = [...Array(historyLength).keys()].map((step, move) => {
    const desc = step === 0 ?
    'Go to game start' :
    'Go to move #' + step;
    return (
      <li key={move}>
        <button onClick={() => resetToStep(move)}>{desc}</button>
      </li>
    );
  });

  let gameClass = `game ${theme}`

  return (
    <div className={gameClass}>
      <div className="left">
        <div className="reduxVersion">
          <div className="game-board">
            <ReduxBoard/>
          </div>
          <div className="game-info">
            <ol>{reduxMoves}</ol>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="extra">
          <div>Theme: {theme}</div>
          <button onClick={() => {dispatch(switchTheme())}}>Change theme</button>
        </div>
      </div>
    </div>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export { ReduxFunctionalGame };
