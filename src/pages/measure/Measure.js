import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Measure.css";

const Measure = () => {
  return (
    <>
      <Navbar />
      <div className="measure-container">
        <Sidebar />
        <div className="work-in-progress">WORK IN PROGRESS</div>
      </div>
    </>
  );
};

export default Measure;
