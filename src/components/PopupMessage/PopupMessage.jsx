import { useEffect, memo } from "react";
import "./popupmessage.css";

const CheckMark = ({ width, height, color, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      className="bi bi-check-circle"
      viewBox="0 0 16 16"
      style={style}
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
    </svg>
  );
};

const PopupMessage = ({ messageIndex }) => {
  useEffect(() => {
    //after the first animation is done (1s)
    const mainWrapper = document.getElementsByClassName(
      "popup-message-throw"
    )[0];
    setTimeout(() => {
      mainWrapper.className = "popup-message-disappear";
    }, 1000);

    //start the second animation
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f3f3fe",
        width: 300,
        height: 70,
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        padding: 20,
        boxSizing: "border-box",
        fontSize: 20,
        fontWeight: 500,
        borderRadius: 10,
        position: "fixed",
        right: 15,
        opacity: 1,
        top: 100 + messageIndex * 100,
      }}
      className="popup-message-throw"
    >
      <CheckMark
        width="50"
        height="50"
        color="green"
        style={{ marginRight: 15 }}
      />
      Successfully Saved
    </div>
  );
};

export default memo(PopupMessage);
