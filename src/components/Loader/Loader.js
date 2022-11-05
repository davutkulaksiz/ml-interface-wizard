import React from "react";
import "./Loader.css";

const Loader = ({ type }) => {
  return (
    <div className={type === "tiny" ? "loader tiny-loader" : "loader"}></div>
  );
};

export default Loader;
