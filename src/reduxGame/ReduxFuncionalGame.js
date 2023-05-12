import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../features/stepNumberSlice'

import {moveToStep, selectSteps} from '../features/historySlice'

import { ReduxBoard } from './reduxBoard';

function ReduxFunctionalGame() {
  const dispatch =  useDispatch();

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

  return (
    <div className='game'>
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
    </div>
  );
}

export { ReduxFunctionalGame };
