import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../Api/firebase";

import { AuthContextApi } from "../../Api/AuthContext";
const Menu = () => {
  let USER = useContext(AuthContextApi);

  let Signout = () => {
    firebase
      .auth()
      .signOut()
      .then(_ => {
        window.location.assign("/login");
      })
      .catch(err => console.log(err));
  };
  let GuestUser = () => (
    <Fragment>
      <li>
        <Link to="/login">SignIn</Link>
      </li>
    </Fragment>
  );
  let AuthenticatedUser = () => (
    <Fragment>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <a href="" onClick={Signout}>
          Logout
        </a>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <span>
              <i className="fal fa-globe"></i>
            </span>
            <span>En</span>
          </a>
        </li>
        {USER ? <AuthenticatedUser /> : <GuestUser />}
      </ul>
    </nav>
  );
};

export default Menu;
