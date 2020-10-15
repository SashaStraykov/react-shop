import styled from 'styled-components';

const Intro = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  justify-items: center;
`;

const IntroMedia = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const IntroMediaVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`;

const IntroContent = styled.div`
  z-index: 2;
  width: 100%;
`;

export {
  Intro, IntroMedia, IntroMediaVideo, IntroContent,
};
