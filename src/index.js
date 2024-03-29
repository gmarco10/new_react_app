import ReactDOM from 'react-dom/client';
import './index.css';

import { Game } from './Game';
import { ClickCounter } from './ClickCounter';
import { FunctionalGame } from './FunctionalGame';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalGame specialRender={< ClickCounter />}/>);
