import styled from "styled-components";

const DivGrid = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.25em; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.25em;
  margin-left: 1.25em;
  margin-right: 1.25em;
  padding-top: 1.2em;
`;

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
  padding: 2em;
`;
const H2 = styled.h2`
  font-size: 2em;
  margin: 1em;
  color: rgb(66, 66, 66);
`;
export { DivGrid, BackGroundGrey, Container, H2 };
