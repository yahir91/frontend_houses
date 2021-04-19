import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import PropTypes from 'prop-types';

const cookies = new Cookies();

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const token = cookies.get('TOKEN');
      if (token) {
        return <Component {...rest} {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: '/',
            state: {
              from: props.location,
            },
          }}
        />
      );
    }}
  />
);

ProtectedRoute.propTypes = {
  index: PropTypes.number.isRequired,
  component
};

export default ProtectedRoute;
