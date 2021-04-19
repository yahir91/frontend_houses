import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
        <Route
          {...rest}
          render={(props) => {
            const token = cookies.get("TOKEN");
            if (token) {
              console.log("no rdir");
              return <Component {...rest} {...props} />;
            } else {
              console.log('redirect');
              return (
                <Redirect
                  to={{
                    pathname: "/",
                    state: {
                      from: props.location,
                    },
                  }}
                />
              );
            }
          }}
        />
  );
};

export default ProtectedRoute;
