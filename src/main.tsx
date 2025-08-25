import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// === password gate (temp) ===
(function () {
  const PASSWORD = 'dis1246';
  const KEY = '__pw_ok_v1__';
  (document.documentElement.style as any).visibility = 'hidden';
  if (location.search.includes('bypass=1')) sessionStorage.setItem(KEY, '1');
  function allow() { (document.documentElement.style as any).visibility = 'visible'; }
  if (sessionStorage.getItem(KEY) === '1') { allow(); return; }
  const p = window.prompt('סיסמה?');
  if (p === PASSWORD) { sessionStorage.setItem(KEY,'1'); allow(); }
  else {
    document.open();
    document.write('<!doctype html><meta charset=utf-8><title>Access denied</title><h1 style="font-family:sans-serif">Access denied</h1>');
    document.close();
    throw new Error('blocked');
  }
})();
// === /password gate ===

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);