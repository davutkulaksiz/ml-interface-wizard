import { Alert, AlertTitle } from "@mui/material";

export default function WizardPredictionOutput({ result }) {
  let severity = "success";
  let message = result.result;
  if (result.detail) {
    severity = "error";
    message = result.detal;
  }

  return (
    <>
      <Alert severity={severity}>
        <AlertTitle>{severity.toUpperCase()}</AlertTitle>
        {`[${new Date().toLocaleString()}] ${message}`}
      </Alert>
    </>
  );
}
