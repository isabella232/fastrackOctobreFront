import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, location }) => (
  <Route
    render={(props) => (localStorage.getItem('token') ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    ))}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

PrivateRoute.defaultProps = {
  location: {},
};
export default PrivateRoute;
