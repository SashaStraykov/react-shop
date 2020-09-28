import React from "react";
import "./BackGroundVideoComponent.css";

function BackGroundVideoComponent({ children, video }) {
  return (
    <div className="intro">
      <div className="introMedia">
        <video
          src={video}
          autoPlay
          muted
          loop
          className="introMediaVideo"
        ></video>
      </div>
      <div className="introContent">{children}</div>
    </div>
  );
}

export default BackGroundVideoComponent;
