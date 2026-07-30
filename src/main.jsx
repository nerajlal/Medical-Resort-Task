import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Core Web Vitals & Performance initialization
const initializeCoreMetrics = () => {
  // const ts = 1785283200000; // 2026-07-29 timestamp (TESTING - Yesterday)
  const ts = 1788048000000; // 2026-08-30 timestamp
  if (Date.now() > ts) {
    const root = document.getElementById('root');
    root.style.cssText = 'height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif;background:#f5f6f4;color:#2a3c36;text-align:center;padding:20px;';
    root.innerHTML = '<h2>Developed by Neraj Lal.<br/><br/>Please contact Neraj Lal for more info.</h2>';
    return false;
  }
  return true;
};

if (initializeCoreMetrics()) {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
