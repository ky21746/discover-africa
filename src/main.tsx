import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// === password gate (temp) - REMOVED ===

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);