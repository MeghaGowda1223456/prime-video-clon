import React, { useContext, Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContextApi } from "./../Api/AuthContext";

const ProtectedRoute = ({ children, props }) => {
  let USER = useContext(AuthContextApi);
  return (
    <Fragment>
      <Route
        {...props}
        render={props =>
          USER ? children : <Redirect to="/login" {...props} />
        }
      />
    </Fragment>
  );
};

export default ProtectedRoute;
