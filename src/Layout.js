import React from 'react';


import { useSelector, useDispatch } from 'react-redux';
import {switchTheme, selectTheme} from './features/themeSlice'

function Layout({children, counterSection}, params) {

  const theme = useSelector(selectTheme)
  const layoutClassName = `layout-container ${theme}`

  return (
    <div className={layoutClassName}>
      { children }
      { counterSection &&
      <div >
        different sections
        { counterSection }
      </div>}
    </div>
  );
}

export { Layout }
