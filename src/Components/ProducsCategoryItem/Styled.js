import styled from "styled-components";

const ItemBox = styled.div`
  width: 95%;
  margin: 1 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  overflow: hidden;
  padding: 1em;
`;

const Img = styled.img.attrs((props) => ({ src: props.src, alt: props.src }))`
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  height: 100%;
  width: 100%;
`;

const H2 = styled.h2`
  grid-column: 2 / 4;
  grid-row: 1 / 2;
`;

const Boxdate = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
`;

const BoxPrice = styled.div`
  grid-column: 3 / 4;
  grid-row: 3/ 4;
  margin-left: auto;
  margin-right: 2.5em;
`;
export { ItemBox, Img, H2, Boxdate, BoxPrice };
