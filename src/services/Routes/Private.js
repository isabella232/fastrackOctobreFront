import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PartnerDetails from '../../pages/PartnerDetails';
import Home from '../../pages/Home';

const Private = () => (
  <Switch>
    <Route path="/:partnerId" component={PartnerDetails} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Private;
