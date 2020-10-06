import styled from "styled-components";

const Img = styled.img.attrs((props) => ({ src: props.src, alt: props.src }))`
  border: 1px solid black;
  height: 100%;
  width: 100%;
  margin-top: 2em;
  object-fit: cover;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  padding: 2em;
  width: 16em;
  height: 100%;
  transition: 0.5s;
  &:hover {
    background: rgb(238, 238, 238);
  }
`;

const H2 = styled.h2`
  font-size: 1.5em;
  margin-bottom: 1em;
  color: rgb(66, 66, 66);
`;

export { Box, Img, H2 };
