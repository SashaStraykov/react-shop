import styled from "styled-components";

const BackGroundGrey = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(238, 238, 238);
  margin-top: 0;
`;
const H2 = styled.h2`
  font-size: 2em;
  margin: 1em;
  margin-top: 1em;
  display: inline-block;
  color: rgb(66, 66, 66);
`;

const H2Title = styled.h2`
  font-size: 2em;
  margin: 1em;
  margin-top: 1em;
  color: rgb(66, 66, 66);
`;
const Container = styled.div`
  width: 80%;
  margin: 2em auto;
  background: rgb(245, 245, 245);
  padding: 0;
  margin-bottom: 1em;
`;

const TypsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2em;
  align-items: center;
`;
const TypsBoxLeft = styled.div`
  color: rgb(66, 66, 66);
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 1.5em;
`;

const TypsBoxRight = styled.div`
  color: var(--nav-color);
  border: 2px solid var(--nav-color);
  padding: 1em 2em;
  font-size: 1.2em;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background: var(--brand-color);
    cursor: pointer;
  }
`;
const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  border-top: 1.5em solid rgb(238, 238, 238);
`;

const ButtonCancel = styled.button`
  background: var(--red-color);
  font-size: 2em;
  color: var(--icon-color);
  border: none;
  transition:0.3s;
  &:focus {
    outline: none;
  }
  &:hover {
    background: var(--brand-color);
    color: rgb(245, 245, 245);
    cursor: pointer;
  }
`;
export {
  BackGroundGrey,
  H2,
  Container,
  TypsBox,
  TypsBoxLeft,
  TypsBoxRight,
  ItemBox,
  ButtonCancel,
  H2Title,
};
