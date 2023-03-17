import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import FormAlternative from '../../components/FormAlternative/FormAlternative';
import "./Measure.css";
import Button from "../../components/Button/Button";

const Measure = () => {
  return (
    <>
      <Navbar />
      <div className="measure-container">
        <Sidebar />
        <div className="main-wrapper" > 
        <FormAlternative isTrue={true} formName="Malignant Detection Model" movie="Es Bestas" animals={["Cat", "Dog"]}  />
        </div>
      </div>
    </>
  );
};

export default Measure;
