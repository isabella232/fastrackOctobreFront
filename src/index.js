import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import store from './store';
import PartnerDetails from './pages/PartnerDetails';
import Home from './pages/Home';
import theme from './services/theme';
import './index.css';


const rootComponent = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/:partnerId" component={PartnerDetails} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>

);

render(rootComponent, document.getElementById('root'));
