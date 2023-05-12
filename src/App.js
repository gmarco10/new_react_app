import React from 'react';


import { ClickCounter } from './ClickCounter';
import { FunctionalGame } from './FunctionalGame';
import { ReduxFunctionalGame } from './reduxGame/ReduxFuncionalGame';
import { ThemeManager } from './ThemeManager';
import { Layout } from './Layout';

function AuxiliarComponent() {
  return(
    <div>
      hice un componente rapido aca para probar lo del layout
    </div>
  )
}

function App() {
  return(
    <div className='app'>
      <div className='principal'>
        <Layout counterSection={<ClickCounter/>}>
          <FunctionalGame specialRender={< ClickCounter />}/>
        </Layout>
        <Layout counterSection={<AuxiliarComponent/>}>
          <ReduxFunctionalGame specialRender={< ClickCounter />}/>
        </Layout>
      </div>
      <ThemeManager/>
    </div>
  );
}

export { App };
