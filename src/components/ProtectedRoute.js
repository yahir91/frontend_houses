import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, status, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (status === 'log_in') {
          console.log('no rdir')
          return <Component {...rest} {...props} />
          
        } else {
          console.log(status)
          return <Redirect to={
            {
              pathname: '/navlinks',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;