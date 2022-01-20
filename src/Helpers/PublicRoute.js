import React, { useContext, Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContextApi } from "./../Api/AuthContext";

const PublicRoute = ({ children, props }) => {
  let USER = useContext(AuthContextApi);
  return (
    <Fragment>
      <Route
        {...props}
        render={props =>
          USER ? <Redirect to="/profile" {...props} /> : children
        }
      />
    </Fragment>
  );
};

export default PublicRoute;
