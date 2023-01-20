import ReactDOM from 'react-dom/client';
import './index.css';

import { Game } from './Game';
import { FunctionalGame } from './FunctionalGame';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalGame />);
