import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";

const Dropdown = ({
  options,
  onChange,
  label,
  defaultValue,
  multiple,
  disabled = false,
}) => {
  const [value, setValue] = useState(defaultValue)
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
      onChange={(event, newValue) => {
        onChange(event, newValue);
        setValue(newValue);
      }}
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => option}
      value={value}
      sx={{
        width: 300,
      }}
      renderInput={(params) => <StyledTextField {...params} label={label} />}
      defaultValue={defaultValue}
      multiple={multiple}
    />
  );
};

export default Dropdown;
