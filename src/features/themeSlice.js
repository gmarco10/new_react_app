import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'light'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {state.value = (state.value === 'light') ? 'dark' : 'light' }
  }

})

export const { switchTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.value;

export default themeSlice.reducer;
