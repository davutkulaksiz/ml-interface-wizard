import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <span className="logo-container">
          <img className="navbar-logo" src="./logo.svg" alt="Hacettepe Logo" />
          <span className="project-name">ML Interface Wizard</span>
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
