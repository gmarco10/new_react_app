import React from 'react';


import { ClickCounter } from './ClickCounter';
import { FunctionalGame } from './FunctionalGame';
import { ReduxFunctionalGame } from './reduxGame/ReduxFuncionalGame';
import { ThemeManager } from './ThemeManager';

function App() {

  return(
    <div>
      hola
      <ThemeManager/>
      <FunctionalGame specialRender={< ClickCounter />}/>
      <ReduxFunctionalGame specialRender={< ClickCounter />}/>
    </div>
  );
}

export { App };
