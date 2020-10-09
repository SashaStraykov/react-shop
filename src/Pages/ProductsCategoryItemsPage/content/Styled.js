import styled from "styled-components";

const BackGroundGrey = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(238, 238, 238);
  margin-top: 0;
  border: 1px solid rgb(238, 238, 238);
`;
const Container = styled.div`
  width: 70%;
  margin: 1em auto;
  background: rgb(245, 245, 245);
  padding: 0;
  margin-bottom: 1em;
`;
const H2 = styled.h2`
  font-size: 2em;
  margin: 1em;
  margin-top: 1em;
  display: inline-block;
  color: rgb(66, 66, 66);
`;

const ContainerItem = styled.div`
  width: 100%;
  border-bottom: 1em solid rgb(238, 238, 238);
`;

const SearchPannel = styled.input`
  display: block;
  margin: 2em auto;
  width: 30em;
  background: transparent;
  color: rgb(66, 66, 66);
  border: none;
  margin-bottom: 5em;
  padding: 0.5em;
  font-size: 1.5em;
  font-weight: bold;
  border-bottom: 3px solid rgb(66, 66, 66);
  &:focus {
    outline: none;
  }
`;
export { BackGroundGrey, Container, H2, ContainerItem, SearchPannel };
