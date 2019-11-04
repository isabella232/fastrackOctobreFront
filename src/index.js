import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const rootComponent = (
  <div>
    <Router>
    </Router>
  </div>
);

render(rootComponent, document.getElementById('root'));
