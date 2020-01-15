import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from './components/Loading';

const Public = () => (
  <Switch>
    <Route path="/" component={Loading} />
  </Switch>
);

export default Public;
