import React, { useEffect, useState } from 'react';

import { Board } from './Board';

function FunctionalGame() {

  const squares = Array(9).fill(null);
  const [history, setHistory] = useState([{ squares: squares }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [clickCounter, setClickCounter] = useState(0);

  useEffect(() => alert('Using effect: WELCOME TO THIS EXITING GAME'), []) // [] == no tiene dependencias, entonces solo se ejecuta la primera vez
  useEffect(() => alert(`Its ${xIsNext ? 'X' : 'O'} turn`), [history, xIsNext])

  const handleClick = (i) => {
    const actualHistory = history.slice(0, stepNumber + 1);
    const current = actualHistory[ stepNumber ];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory( actualHistory.concat([{ squares: squares }]));
    setStepNumber(actualHistory.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0)
  }

  const changeBackGround = () => {
    alert('hola')
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
          onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
      <div className="extra">
        <div>Clicks: {clickCounter}</div>
        <button onClick={() => setClickCounter(clickCounter + 1)}>Click me</button>
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
