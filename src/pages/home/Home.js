import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Wizard from "../../components/Wizard/Wizard";
import "./Home.css";

const Home = () => {
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

export default Home;
