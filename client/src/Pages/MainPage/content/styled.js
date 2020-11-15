import styled, { keyframes } from 'styled-components';

export const H1 = styled.h1`
  color: aliceblue;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 6.25em;
`;

export const H2 = styled.h2`
  color: aliceblue;
  font-size: 2.5em;
`;

export const ButtonCustom = styled.button`
  padding: 1em 3em;
  border: 2px solid aliceblue;
  color: aliceblue;
  font-size: 1.5em;
  font-weight: bold;
  margin: 1.25em;
  transition: 0.5s;
  background: transparent;
  &:hover {
    color: black;
    border: 2px solid black;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 0px 2.53em 0px white;
    cursor: pointer;
  }
`;

export const Screen = styled.div`
  display: flex;
  flex:1 1 auto;
  flex-direction:row;
  justify-content:center;
`;

export const LeftPart = styled.div`
  display:flex;
  width:50%;
  background:black;
`;


export const RightPart = styled.div`
  display:flex;
  width:50%;
  background:yellow;
  &:hover ${LeftPart} {
    background:red;
  }

`;

