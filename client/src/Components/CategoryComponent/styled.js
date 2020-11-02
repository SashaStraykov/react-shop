import styled from 'styled-components';

export const Img = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 2em;
  object-fit: cover;
  border: 1px solid black;
`;
export const Box = styled.div`
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

export const H2 = styled.h2`
  font-size: 1.5em;
  margin: 0.2em;
  color: rgb(66, 66, 66);
`;