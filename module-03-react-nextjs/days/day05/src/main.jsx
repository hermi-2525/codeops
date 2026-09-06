import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

window.onerror = (msg, url, line, col, err) => {
  console.error('Global error:', msg, err);
};
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled rejection:', event.reason);
});

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
