import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css'
import './App.css'
import { BrowserRouter, } from "react-router-dom"
import AccountProvider from "./providers/UserProvider";;

ReactDOM.render(
  <AccountProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AccountProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
