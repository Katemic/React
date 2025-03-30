import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/index.jsx';
import { BrowserRouter } from 'react-router-dom'

const el = document.getElementById('root');
if (!el) {
  throw new Error("Root element not found");
}
const root = createRoot(el);

root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
 </BrowserRouter>
);