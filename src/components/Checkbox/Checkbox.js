import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { pink } from "@mui/material/colors";
import { default as MUICheckbox } from "@mui/material/Checkbox";

const Checkbox = () => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MUICheckbox
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        }
        label="Label"
      />
    </FormGroup>
  );
};

export default Checkbox;
