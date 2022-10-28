import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import WIPmeasure from "../../assets/WIPmeasure.gif";

import "./Measure.css";

const Measure = () => {
  return (
    <>
      <Navbar />
      <div className="measure-container">
        <Sidebar />
        <div className="work-in-progress">
          <img
            className="work-in-progress-gif"
            src={WIPmeasure}
            alt="Work-in-progress"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Measure;
