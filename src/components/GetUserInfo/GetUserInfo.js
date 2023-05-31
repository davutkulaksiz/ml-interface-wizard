import { useState } from "react";
import MUITextField from "../MUITextField/MUITextField";
import RadioButtons from "../RadioButtons/RadioButtons";

export function GetUserInfo({ urlToken, setTokenExistsInTheUrlCallback }) {
  const [hospitalType, setHospitalType] = useState("state");
  console.log(hospitalType);
  //TODO
  // get user info
  //save to browser storage
  //save the url token to browser storage using the props callback

  // year of expertise
  // hospital type

  return (
    <div>
      <div>Please fill the following form (Just for once)</div>
      Your year of expertise: <MUITextField />
      <RadioButtons
        row
        handleChange={(event) => {
          setHospitalType(event.target.value);
        }}
        label={"Where have you worked most"}
        options={["state", "university", "private"]}
      />
    </div>
  );
}
