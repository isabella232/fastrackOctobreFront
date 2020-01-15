import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import { createStore, compose, applyMiddleware } from 'redux';

import Public from './services/Routes/Public'
import Private from './services/Routes/Private'
import theme from './services/theme';
import './index.css';
import combineReducer from './store/index';
import logMiddleware from './store/logMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
  ),
);

const store = createStore(
  combineReducer,
  enhancers,
);

const rootComponent = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        {localStorage.getItem('token') ? (
          <Private />
        ) : (
          <Public />
        )}
      </Router>
    </ThemeProvider>
  </Provider>

);

render(rootComponent, document.getElementById('root'));
