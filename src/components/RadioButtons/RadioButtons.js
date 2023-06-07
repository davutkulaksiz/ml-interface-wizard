import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { pink } from "@mui/material/colors";

const RadioButtons = ({
  value,
  handleChange,
  label,
  options,
  disabled = false,
  row = false,
}) => {
  return (
    <FormControl>
      <FormLabel
        id="demo-controlled-radio-buttons-group"
        sx={{
          "&.MuiFormLabel-root.Mui-focused": {
            color: pink[800],
          },
        }}
      >
        {label}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        row={row}
      >
        {options.map((element, index) => {
          return (
            <FormControlLabel
              key={index}
              value={options[index]}
              disabled={disabled}
              control={
                <Radio
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
              }
              label={options[index]}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons;
