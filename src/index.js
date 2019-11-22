import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Nav from './components/Nav';
import TextHeader from './components/TextHeader';
import FixedButton from './components/FixedButton';
import Card from './components/Card';

const partner = {
  firstname: 'test',
  wait: 3000,
};

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
