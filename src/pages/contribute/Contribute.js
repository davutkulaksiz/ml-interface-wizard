import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Contribute.css";

const Contribute = () => {
  return (
    <>
      <Navbar />
      <div className="contribute-container">
        <Sidebar />
        <div className="work-in-progress">WORK IN PROGRESS</div>
      </div>
    </>
  );
};

export default Contribute;
