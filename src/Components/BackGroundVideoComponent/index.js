import React from 'react';
import PropTypes from 'prop-types';
import {
  Intro, IntroMedia, IntroMediaVideo, IntroContent,
} from './styled';

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

BackGroundVideoComponent.propTypes = {
  children: PropTypes.node.isRequired,
  video: PropTypes.string.isRequired,
};

export default BackGroundVideoComponent;
