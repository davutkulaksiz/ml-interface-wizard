import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const Dropdown = ({ options, onChange, value, disabled = false }) => {
  const StyledTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#ad1457",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ad1457",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ad1457",
      },
      "&:hover fieldset": {
        borderColor: "#ad1457",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ad1457",
      },
    },
  });

  return (
    <Autocomplete
      disablePortal
      disabled={disabled}
      onChange={onChange}
      id="combo-box-demo"
      options={options}
      value={value}
      sx={{
        width: 300,
      }}
      renderInput={(params) => <StyledTextField {...params} label="Movie" />}
    />
  );
};

export default Dropdown;
