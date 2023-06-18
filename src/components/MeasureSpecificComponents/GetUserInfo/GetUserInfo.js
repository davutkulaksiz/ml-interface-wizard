import { useState } from "react";
import MUITextField from "../../MUITextField/MUITextField";
import RadioButtons from "../../RadioButtons/RadioButtons";
import Button from "../../Button/Button";

export function GetUserInfo({ urlToken, setTokenExistsInTheStorageCallback }) {
  const [hospitalType, setHospitalType] = useState(undefined);
  const [yearOfExpertise, setYearOfExpertise] = useState(1);
  const [errorExists, setErrorExists] = useState(false);

  const handleUserFormSubmitClick = () => {
    //show error message if no hospital type is not provided
    if (!hospitalType) {
      setErrorExists(true);
      return;
    }
    if (yearOfExpertise < 0) {
      setErrorExists(true);
      return;
    }

    //s indicates State Hospital
    //u indicates university hospital
    //p indicates private hospital

    let hospitalNominator;
    switch (hospitalType) {
      case "State Hospital":
        hospitalNominator = "s";
        break;
      case "University Hospital":
        hospitalNominator = "u";
        break;
      case "Private Hospital":
        hospitalNominator = "p";
        break;
    }

    localStorage.setItem(
      "ml_measure_user_info",
      yearOfExpertise.toString().concat(hospitalNominator)
    );
    localStorage.setItem("ml_measure_auth_token", urlToken);

    setTokenExistsInTheStorageCallback();
  };

  return (
    <div className="form-wrapper">
      <div className="form-upper">
        User Information Form
        <div style={{ fontSize: 25, fontWeight: 500 }}>(Just for once)</div>
      </div>
      <div className="form-divider"></div>
      <div
        className="form-lower-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div style={{ maxWidth: 400 }}>
          <MUITextField
            defaultValue={yearOfExpertise}
            label={"Your year of expertise"}
            onChange={(event) => {
              setYearOfExpertise(event.target.value);
            }}
          />
        </div>
        <div style={errorExists ? { borderTop: "2px solid red" } : {}}>
          <div
            style={
              errorExists
                ? { color: "red", fontSize: 18, fontWeight: 600 }
                : { display: "none" }
            }
          >
            *Hospital type is a required field.
          </div>
          <RadioButtons
            handleChange={(event) => {
              setHospitalType(event.target.value);
            }}
            label={"You spent most of your career at"}
            options={[
              "State Hospital",
              "University Hospital",
              "Private Hospital",
            ]}
          />
        </div>

        <Button
          buttonType={"success"}
          type={"submit"}
          text={"Submit"}
          onClick={handleUserFormSubmitClick}
        />
      </div>
    </div>
  );
}
