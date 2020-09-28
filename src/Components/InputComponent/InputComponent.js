import React from "react";
import "./InputComponent.css";

function InputComponent({ type = "text" }) {
  return <input type={type} className="input" />;
}

export default InputComponent;
