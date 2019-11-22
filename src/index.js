import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import PartnerDetails from './pages/PartnerDetails';
import Home from './pages/Home';
import css from '../src/styles/index.css';

const rootComponent = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/:partnerId" component={PartnerDetails} />
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </Provider>

);

render(rootComponent, document.getElementById('root'));
