import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({ left: "0px", top: "0px" });
  };

  useEffect(() => {
    const move = (evt) => {
      if (renderBall) {
        if (evt.keyCode === 37) {
          setX(x - 5);
          setBallPosition({
            left: x - 5 + "px",
            top: y + "px",
          });
        } else if (evt.keyCode === 39) {
          setX(x + 5);
          setBallPosition({
            left: x + 5 + "px",
            top: y + "px",
          });
        } else if (evt.keyCode === 40) {
          setY(y + 5);
          setBallPosition({
            left: x + "px",
            top: y + 5 + "px",
          });
        } else if (evt.keyCode === 38) {
          setY(y - 5);
          setBallPosition({
            left: x + "px",
            top: y - 5 + "px",
          });
        }
      }
    };
    document.addEventListener("keydown", move);
    return () => {
      document.removeEventListener("keydown", move);
    };
  });
  const renderChoice = () => {
    return renderBall ? (
      <div
        style={{
          position: "absolute",
          top: ballPosition.top,
          left: ballPosition.left,
        }}
        className="ball"
      ></div>
    ) : (
      <button className="start ballProvider" onClick={() => setRenderBall(true)}>
        Start
      </button>
    );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
