import React from 'react';
import {
  Intro, IntroMedia, IntroMediaVideo, IntroContent,
} from './Styled';

// eslint-disable-next-line react/prop-types
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
        />
      </IntroMedia>
      <IntroContent>{children}</IntroContent>
    </Intro>
  );
}

export default BackGroundVideoComponent;
