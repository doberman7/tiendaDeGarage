import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CartProvider } from 'react-use-cart';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.dark.css';
import { AppCtxProvider } from './hooks/context';

ReactDOM.render(
  // <React.StrictMode>
  <AppCtxProvider>
    <CartProvider>
      <Router />
    </CartProvider>
  </AppCtxProvider>, // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
