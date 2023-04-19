import { IconButton, InputAdornment, Snackbar, TextField } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

const WizardModelIdField = ({ modelId }) => {
  const [open, setOpen] = useState(false);
  const onCopyClicked = () => {
    setOpen(true);
    navigator.clipboard.writeText(modelId);
  };

  return (
    <>
      <TextField
        label="Model ID"
        id="model_id_field"
        type="text"
        helperText="Click the button to copy the Model ID."
        variant="filled"
        value={modelId}
        disabled
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Copy Model ID"
                onClick={() => onCopyClicked()}
                edge="end"
              >
                <ContentCopyIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Snackbar
        message="Copied to clipboard!"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};

export default WizardModelIdField;
