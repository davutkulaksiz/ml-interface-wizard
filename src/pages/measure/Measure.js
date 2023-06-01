import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FormAlternative from '../../components/FormAlternative/FormAlternative';
import "./Measure.css";

const Measure = () => {
  return (
    <>
      <Navbar />
      <div className="measure-container">
        <div className="main-wrapper" > 
        <FormAlternative isTrue={true} formName="Malignant Detection Model" movie="Es Bestas" animals={["Cat", "Dog"]}  />
        </div>
      </div>
    </>
  );
};

export default Measure;
