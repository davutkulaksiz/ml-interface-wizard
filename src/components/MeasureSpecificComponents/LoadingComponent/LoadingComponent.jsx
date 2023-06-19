import CircularProgress from "@mui/material/CircularProgress";

const LoadingComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress style={{ width: 100, height: 100, color: "#c4c4fa" }} />
    </div>
  );
};

export default LoadingComponent;
