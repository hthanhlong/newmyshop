import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("Token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.locaiton } }}
        />
      )
    }
  />
);

export default PrivateRouter;
