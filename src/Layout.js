import React from 'react';


import { useSelector } from 'react-redux';
import { selectTheme } from './features/themeSlice'

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
