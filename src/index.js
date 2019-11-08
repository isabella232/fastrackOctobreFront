import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'src/store';

const rootComponent = (
  <Provider store={store}>
    <Router>
    </Router>
  </Provider>

);

render(rootComponent, document.getElementById('root'));
