import React from 'react';

import { selectTheme } from '../features/themeSlice'
import { useSelector } from 'react-redux';

function Square(props){
  const theme = useSelector(selectTheme)
  let squareClass = `square ${theme}`

  return(
    <button
      className={squareClass}
      onClick={() => props.onClick()}
      >
        {props.value}
    </button>
  )
}

export default Square;
