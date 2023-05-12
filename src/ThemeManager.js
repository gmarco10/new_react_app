import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {switchTheme, selectTheme} from './features/themeSlice'

function ThemeManager() {
  const dispatch =  useDispatch();

  const theme = useSelector(selectTheme)
  const themeClassName = `theme ${theme}`
  return(

    <div className={themeClassName}>
      <div>Theme: {theme}</div>
      <button onClick={() => {dispatch(switchTheme())}}>Change theme</button>
    </div>
  );
}

export { ThemeManager };
