import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

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

const MUITextField = ({
  label,
  helperText,
  defaultValue,
  name,
  onChange,
  inputProps,
  type,
}) => {
  const [value, setValue] = useState(defaultValue);

  console.log("Min: " + inputProps.min + " Max " + inputProps.max);

  return (
    <StyledTextField
      fullWidth
      label={
        <Tooltip title={label} placement="bottom-start" arrow>
          <span>{label}</span>
        </Tooltip>
      }
      helperText={helperText}
      type={type}
      name={name}
      onChange={(event) => {
        onChange(event);
        setValue(event.target.value);
      }}
      value={value}
      inputProps={inputProps}
    ></StyledTextField>
  );
};

export default MUITextField;
