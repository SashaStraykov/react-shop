import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  background: rgba(66, 66, 66, 0.5);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 1em;
  justify-items: center;
  justify-content: center;
  vertical-align: center;
  z-index: 2;
`;
const NavButton = styled.div`
  padding: 1.5em;
  align-self: center;
  border-bottom: 1px solid rgb(238, 238, 238);
  color: rgb(238, 238, 238);
  &:hover {
    cursor: pointer;
    background: rgb(245, 245, 245);
    color: rgb(66, 66, 66);
  }
`;

const Block = styled.div`
  align-self: center;
`;

export { NavBar, NavButton, Block };
