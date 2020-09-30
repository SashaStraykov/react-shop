import styled from "styled-components";

const Button = styled.button`
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
  }
`;
export { Button };
