import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import { createStore, compose, applyMiddleware } from 'redux';

import PrivateRoute from './services/Routes/PrivateRoute';
import theme from './services/theme';
import './index.css';
import combineReducer from './store/index';
import logMiddleware from './store/logMiddleware';
import Home from './pages/Home';
import PartnerDetails from './pages/PartnerDetails';
import Loading from './components/Loading';

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
        <Switch>
          <Route exact path="/" component={Loading} />
          <PrivateRoute exact path="/partner" component={Home} />
          <PrivateRoute exact path="/partner/:id" component={PartnerDetails} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>

);

render(rootComponent, document.getElementById('root'));
