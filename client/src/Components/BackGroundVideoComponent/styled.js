import styled from 'styled-components';

export const Intro = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  justify-items: center;
  position: relative;
`;

export const IntroMedia = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const IntroMediaVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`;

export const IntroContent = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
`;
