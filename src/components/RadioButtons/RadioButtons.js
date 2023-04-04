import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { pink } from "@mui/material/colors";

const RadioButtons = ({
  defaultValue,
  handleChange,
  label,
  options,
  disabled = false,
  row = false,
}) => {
  const [value, setValue] = useState(defaultValue)
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
        onChange={(event, newValue) => {
          handleChange(event, newValue)
          setValue(newValue)
        }}
        row={row}
      >
        <FormControlLabel
          value={options[0]}
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
          label={options[0]}
        />
        <FormControlLabel
          value={options[1]}
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
          label={options[1]}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons;
