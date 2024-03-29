import React, { useCallback, useEffect, useState } from 'react';

import { Board } from './Board';
import { ClickCounter } from './ClickCounter';

function FunctionalGame({ specialRender }) {

  const squares = Array(9).fill(null);
  const [history, setHistory] = useState([{ squares: squares }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  // useEffect(() => alert('Using effect: WELCOME TO THIS EXITING GAME'), []) // [] == no tiene dependencias, entonces solo se ejecuta la primera vez
  // useEffect(() => alert(`Its ${xIsNext ? 'X' : 'O'} turn`), [stepNumber])

  // porque lo genero como un callback? asi solo se ejecuta cuando las variables en [] se modifican
  // asi evito la re-renderizacion innecesaria
  // PREGUNTA: porque tengo que agregar stepNumber
  // no es necesario agregar XIsNext
  // PREGUNTA: en que momento React sabe que le estoy pasando un parametro
  const handleClick = useCallback((i) => {
    const actualHistory = history.slice(0, stepNumber + 1);
    const current = actualHistory[ stepNumber ];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory( actualHistory.concat([{ squares: squares }]));
    setStepNumber(actualHistory.length);
    setXIsNext(prev => !prev);
  }, [history, stepNumber, xIsNext]);

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0)
  }

  const actualHistory = history.slice(0, stepNumber + 1);
  const current = actualHistory[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = actualHistory.map((step, move) => {
    const desc = move ?
    'Go to move #' + move :
    'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner '+ winner;
  } else{
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={ handleClick }/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
      <div>
        Not affected because its a param
        { specialRender }
      </div>
      <div>
        re-rendered because its a child
        < ClickCounter />
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

export { FunctionalGame };
