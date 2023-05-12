import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [[null,null,null,null,null,null,null,null,null]]
};

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

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    fillSquare: (state, index) => {
      const lastStep = state.value.length -1

      const current = state.value[ lastStep ];
      const squares = current.slice();
      if (calculateWinner(squares) || squares[index.payload]) {
        return;
      }

      let xIsNext = state.value.length % 2 === 0
      squares[index.payload] = xIsNext ? 'X' : 'O';
      state.value = state.value.concat([squares])
     },

    moveToStep: (state, step) => {
      state.value = state.value.slice(0, step.payload + 1)
    }
  }

})

export const { moveToStep, fillSquare } = historySlice.actions;

export const selectHistory = (state) => state.newHistory.value;
export const selectCurrentBoard = (state) => state.newHistory.value[state.newHistory.value.length -1 ]
export const selectSteps = (state) => state.newHistory.value.length

export default historySlice.reducer;
