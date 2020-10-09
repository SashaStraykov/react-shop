import React from "react";
import { Intro, IntroMedia, IntroMediaVideo, IntroContent } from "./Styled";

function BackGroundVideoComponent({ children, video }) {
  return (
    <Intro>
      <IntroMedia>
        <IntroMediaVideo
          src={video}
          autoPlay
          muted
          loop
          className="introMediaVideo"
        ></IntroMediaVideo>
      </IntroMedia>
      <IntroContent>{children}</IntroContent>
    </Intro>
  );
}

export default BackGroundVideoComponent;
