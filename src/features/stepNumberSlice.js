import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const stepNumberSlice = createSlice({
  name: 'stepNumber',
  initialState,
  reducers: {
    increment: (state, value) =>{ state.value += 1 }
  }

})

export const { increment } = stepNumberSlice.actions;

export const selectStepNumber = (state) => state.newStepNumber.value;

export default stepNumberSlice.reducer;
