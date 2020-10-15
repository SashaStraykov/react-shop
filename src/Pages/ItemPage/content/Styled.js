import styled from 'styled-components';

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

const GridBox = styled.div`
  width: 100%;
  margin: 1em auto;
  margin-bottom: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  position: relative;
  overflow: hidden;
  padding: 2.5em;
`;

const GridSlider = styled.div`
  grid-column: 1/3;
  grid-row: 1/4;
  width: 30em;
  height: 25em;
`;

const ItemDescription = styled.div`
  grid-column: 3/5;
  grid-row: 1/3;
  min-height: 12em;
  width: 100%;
  overflow-y: scroll;
  font-size: 1.3em;
  text-align: justify;
  white-space: wrap;
  word-break: break-all;
  padding: 1em;
`;

const ItemPrice = styled.span`
  margin: auto auto;
`;

const Button = styled.button`
  background: white;
  color: black;
  padding: 0.5em 2em;
  margin: auto auto;
  font-size: 1.5em;
  margin-right: 25px;
  border: 1px solid black;
  &:focus {
    outline: none;
  }
  &:hover {
    background: rgb(66, 66, 66);
    cursor: pointer;
    color: white;
  }
`;
const ButtonSign = styled.button`
  background: red;
  color: black;
  padding: 0.5em 2em;
  position: relative;
  top: 50%;
  transform: translateY(-50%);  
  font-size: 1.5em;

  border: 1px solid black;
  &:focus {
    outline: none;
  }
  &:hover {
    background: rgb(66, 66, 66);
    cursor: pointer;
    color: white;
  }
`;

export {
  BackGroundGrey,
  Container,
  H2,
  GridBox,
  GridSlider,
  ItemDescription,
  ItemPrice,
  Button,
  ButtonSign,
};
