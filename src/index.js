import React from "react";
import ReactDOM from "react-dom";

const cssStyle = {
  color: "red",
  size: "20px",
  border: "2px solid black"
};

const number = 7;

ReactDOM.render(
  <div>
    <h1 className="heading" style={cssStyle}>
      Hello World!
    </h1>
    <p>your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
