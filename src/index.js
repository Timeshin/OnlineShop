import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { Provider as UrqlProvider } from 'urql';
import client from "./client"

ReactDOM.render(
  <UrqlProvider value={client}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </UrqlProvider>,
  document.getElementById('root')
);
