import React from "react";
import { useHistory } from "react-router-dom";
import { Home, Assessment, Scale } from "@mui/icons-material";

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
                <Assessment />
              </span>
              <span className="nav-name">ML Measure</span>
            </li>
            <li
              className={
                history.location.pathname === "/counter"
                  ? "current-navigation"
                  : "navigation"
              }
              onClick={() => {
                redirectTo("/counter");
                window.scrollTo(0, 0);
              }}
            >
              <span className="nav-icon">
                <Scale />
              </span>
              <span className="nav-name">ML Counter</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
