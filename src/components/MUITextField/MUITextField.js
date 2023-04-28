import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const MUITextField = ({
  label,
  helperText,
  defaultValue,
  name,
  onChange,
  inputProps,
}) => {
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
    <StyledTextField
      label={label}
      helperText={helperText}
      defaultValue={defaultValue}
      type="number"
      name={name}
      onChange={onChange}
      inputProps={inputProps}
      disabled={true}
    ></StyledTextField>
  );
};

export default MUITextField;
