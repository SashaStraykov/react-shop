import styled from 'styled-components';

const BackGroundGrey = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(238, 238, 238);
  margin-top: 0;
  border: 1px solid rgb(238, 238, 238);
  max-height: 90vh;
  overflow: scroll;

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
const Box = styled.div`
  display: block;
`;
export {
  BackGroundGrey, H2, Container, Box,
};
