import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Navbar = () => {
  const history = useHistory();

  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <span className="logo-container">
          <Logo style={{ width: 42, marginLeft: 10 }} />
          <span className="project-name">
            {history.location.pathname.includes("home")
              ? "Home"
              : history.location.pathname.includes("interface-wizard")
              ? "ML Interface Wizard"
              : history.location.pathname.includes("/measure")
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
