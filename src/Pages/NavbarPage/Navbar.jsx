import React from "react";
import Menu from "./Menu";
import "./navbar.css";
const Navbar = () => {
  return (
    <section id="navbarBlock">
      <article>
        <div className="logoBlock">
          <img src="logo.svg" alt="logo" />
        </div>
        <div className="menuBlock">
          <Menu />
        </div>
      </article>
    </section>
  );
};

export default Navbar;
