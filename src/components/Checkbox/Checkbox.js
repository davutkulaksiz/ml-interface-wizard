import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { pink } from "@mui/material/colors";
import { default as MUICheckbox } from "@mui/material/Checkbox";

const Checkbox = ({ checked, label, onChange }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MUICheckbox
            checked={checked}
            onChange={onChange}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default Checkbox;
