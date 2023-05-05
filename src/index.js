import ReactDOM from 'react-dom/client';
import './index.css';
import store from './app/store'
import { Provider } from 'react-redux'

import { Game } from './Game';
import { ClickCounter } from './ClickCounter';
import { FunctionalGame } from './FunctionalGame';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store={store}>
    <FunctionalGame specialRender={< ClickCounter />}/>
  </Provider>
  );
