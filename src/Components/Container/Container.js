import React from "react";
import "./Container.css";

function Container({ children, white = false }) {
  const contsainerStyle = white ? "containerWhite" : "container";
  return <div className={contsainerStyle}>{children}</div>;
}

export default Container;
