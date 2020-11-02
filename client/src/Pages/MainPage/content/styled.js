import styled from 'styled-components';

export const H1 = styled.h1`
  color: aliceblue;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 6.25em;
`;

export const H2 = styled.h2`
  color: aliceblue;
  font-size: 2.5em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
`;

export const ButtonCustom = styled.button`
  padding: 1em;
  border: 2px solid aliceblue;
  color: aliceblue;
  font-size: 1.5em;
  font-weight: bold;
  margin: 1.25em;
  padding-right: 3em;
  padding-left: 3em;
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
