import styled from "styled-components";

const Nav = styled.nav`
  background: rgb(66, 66, 66);
  width: 100%;
  display: flex;
  justify-items: center;
`;

const Img = styled.img.attrs((props) => ({ src: props.src, alt: props.src }))`
  height: 3em;
  width: 12em;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 1em 0;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
`;

const ContainerRight = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  justify-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export { Nav, Img, Container, ContainerRight };
