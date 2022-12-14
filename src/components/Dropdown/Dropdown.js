import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Dropdown = ({ options, onChange, value }) => {
  return (
    <Autocomplete
      disablePortal
      onChange={onChange}
      id="combo-box-demo"
      options={options}
      value={value}
      sx={{ width: 300, color: "#e91e63" }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};

export default Dropdown;
