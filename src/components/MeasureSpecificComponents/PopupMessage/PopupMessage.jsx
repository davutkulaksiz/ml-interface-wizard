import { useEffect, memo } from "react";
import "./popupmessage.css";
import XCircle from "../Icons/XCircle";
import CheckMark from "../Icons/CheckMark";

const PopupMessage = ({ message, isErroneous }) => {
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
        top: 100,
      }}
      className="popup-message-throw"
    >
      {isErroneous ? (
        <XCircle
          width={"50"}
          height={"50"}
          color="red"
          style={{ marginRight: 15 }}
        />
      ) : (
        <CheckMark
          width="50"
          height="50"
          color="green"
          style={{ marginRight: 15 }}
        />
      )}

      {message ? message : isErroneous ? "Error" : "Success"}
    </div>
  );
};

export default memo(PopupMessage);
