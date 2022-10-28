import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Counter.css";

const Counter = () => {
  return (
    <>
      <Navbar />
      <div className="counter-container">
        <Sidebar />
        <div className="work-in-progress">WORK IN PROGRESS</div>
      </div>
    </>
  );
};

export default Counter;
