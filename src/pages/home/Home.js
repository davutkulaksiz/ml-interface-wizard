import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Landing from "../../components/Landing/Landing";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <Sidebar />
        <Landing />
      </div>
    </>
  );
};

export default Home;
