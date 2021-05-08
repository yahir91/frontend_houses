import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import PropTypes from 'prop-types';
/* eslint-disable react/jsx-props-no-spreading */

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
  component: PropTypes.elementType.isRequired,
  location: PropTypes.oneOfType([PropTypes.object]),
};

ProtectedRoute.defaultProps = {
  location: null,
};

export default ProtectedRoute;
