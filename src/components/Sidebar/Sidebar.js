import React from "react";
import { useHistory } from "react-router-dom";
import {
  Home,
  IntegrationInstructions,
  Add,
  SquareFoot,
} from "@mui/icons-material";

import "./Sidebar.css";

const Sidebar = () => {
  const history = useHistory();
  const redirectTo = (path) => {
    history.push(path);
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-container">
        <span className="sidebar-menu-text">MENU</span>
        <div className="navigation-container">
          <ul className="navigations">
            <li
              className={
                history.location.pathname === "/home"
                  ? "current-navigation"
                  : "navigation"
              }
              onClick={() => {
                redirectTo("/home");
                window.scrollTo(0, 0);
              }}
            >
              <span className="nav-icon">
                <Home />
              </span>
              <span className="nav-name">Home</span>
            </li>
            <li
              className={
                history.location.pathname === "/interface-wizard"
                  ? "current-navigation"
                  : "navigation"
              }
              onClick={() => {
                redirectTo("/interface-wizard");
                window.scrollTo(0, 0);
              }}
            >
              <span className="nav-icon">
                <IntegrationInstructions />
              </span>
              <span className="nav-name">Interface</span>
            </li>
            <li
              className={
                history.location.pathname === "/measure"
                  ? "current-navigation"
                  : "navigation"
              }
              onClick={() => {
                redirectTo("/measure");
                window.scrollTo(0, 0);
              }}
            >
              <span className="nav-icon">
                <SquareFoot />
              </span>
              <span className="nav-name">ML Measure</span>
            </li>
            <li
              className={
                history.location.pathname === "/contribute"
                  ? "current-navigation"
                  : "navigation"
              }
              onClick={() => {
                redirectTo("/contribute");
                window.scrollTo(0, 0);
              }}
            >
              <span className="nav-icon">
                <Add />
              </span>
              <span className="nav-name">ML Contribute</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
