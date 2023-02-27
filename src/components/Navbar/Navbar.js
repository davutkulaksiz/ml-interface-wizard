import React from "react";
import { useHistory } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();

  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <span className="logo-container">
          <img className="navbar-logo" src="./logo.svg" alt="Hacettepe Logo" />
          <span className="project-name">
            {history.location.pathname === "/home"
              ? "Home"
              : history.location.pathname === "/interface-wizard"
              ? "ML Interface Wizard"
              : history.location.pathname === "/measure"
              ? "ML Measure"
              : "ML Contribute"}
          </span>
        </span>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-right">
        <div className="navbar-icons">
          <div className="profile-area">
            <img
              src="https://humir.cs.hacettepe.edu.tr/images/fakal.jpg"
              alt=""
              className="navbar-profile-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
