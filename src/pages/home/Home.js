import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Landing from "../../components/Landing/Landing";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <Landing />
      </div>
    </>
  );
};

export default Home;
