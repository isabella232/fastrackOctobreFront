import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'src/store';
import Nav from 'src/components/Nav';
import TextHeader from 'src/components/TextHeader';
import FixedButton from 'src/components/FixedButton';
import Card from 'src/components/Card';

const partner = {
  firstname: 'test',
  wait: 3000,
};

const rootComponent = (
  <Provider store={store}>
    <Router>
      <Nav />
      <TextHeader title="Partners" subtitle="Liste des partnes enregistrés" />
      <FixedButton />
      <Card partner={partner} />
    </Router>
  </Provider>

);

render(rootComponent, document.getElementById('root'));
