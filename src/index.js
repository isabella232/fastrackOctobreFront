import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'src/store';
import Home from 'src/pages/Home';
import PartnerDetails from 'src/pages/PartnerDetails';

const rootComponent = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="partner/:partnerId" component={PartnerDetails} />
        <Route exact path="/partner">
          <Home />
        </Route>
      </Switch>
    </Router>
  </Provider>

);

render(rootComponent, document.getElementById('root'));
