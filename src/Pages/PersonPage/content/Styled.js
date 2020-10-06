import styled from "styled-components";

const BackGroundGrey = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(238, 238, 238);
  margin-top: 0;
  border: 1px solid rgb(238, 238, 238);
`;
const H2 = styled.h2`
  font-size: 2em;
  margin: 1em;
  margin-top: 1em;
  display: inline-block;
  color: rgb(66, 66, 66);
`;
const Container = styled.div`
  width: 80%;
  margin: 2em auto;
  background: rgb(245, 245, 245);
  padding: 0;
  margin-bottom: 1em;
`;
const ButtonSignOut = styled.div`
  padding: 1em 2em;
  width: 10em;
  margin-left: auto;
  font-weight: bold;
  font-size: 1.2em;
  color: rgb(66, 66, 66);
  &:hover {
    background: rgb(66, 66, 66);
    color: rgb(245, 245, 245);
    cursor: pointer;
  }
`;
const TypsBox = styled.div`
  padding: 1em 2em;
  width: 10em;
  margin-left: auto;
  font-weight: bold;
  font-size: 1.2em;
  color: rgb(66, 66, 66);
`;
const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  border-top: 1.5em solid rgb(238, 238, 238);
`;

const ButtonCancel = styled.button`
  background: rgb(239, 154, 154);
  font-size: 2em;
  color: rgb(66, 66, 66);
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background: rgb(66, 66, 66);
    color: rgb(245, 245, 245);
    cursor: pointer;
  }
`;

export { BackGroundGrey, H2, Container, ButtonSignOut, ItemBox, ButtonCancel, TypsBox };
