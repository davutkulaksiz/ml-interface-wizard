import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Wizard from "../../components/Wizard/Wizard";
import "./Interface.css";

const Interface = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <Sidebar />
        <Wizard />
      </div>
    </>
  );
};

export default Interface;
