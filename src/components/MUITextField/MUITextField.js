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
  disabled = false,
  width = "100%",
}) => {
  const StyledTextField = styled(TextField)({
    "& label.Mui-disabled": {
      color: "rgba(0, 0, 0, 1)", // (default alpha is 0.38)
    },
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
      disabled={disabled}
      sx={{ width: width }}
    ></StyledTextField>
  );
};

export default MUITextField;
