import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const stepNumberSlice = createSlice({
  name: 'stepNumber',
  initialState,
  reducers: {
    increment: (state) =>{ state.value += 1 },
    reset: (state, number) => { state.value = number.payload }
  }

})

export const { increment, reset } = stepNumberSlice.actions;

export const selectStepNumber = (state) => state.newStepNumber.value;

export default stepNumberSlice.reducer;
