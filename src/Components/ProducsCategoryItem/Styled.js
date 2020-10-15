import styled from 'styled-components';

const ItemBox = styled.div`
  width: 95%;
  margin: 1 auto;
  display: grid;
  grid-template-columns: 30% 35% 35%;
  grid-template-rows: 6em 3em 3em;
  overflow: hidden;
  padding: 1em;
`;

const Img = styled.img.attrs((props) => ({ src: props.src, alt: props.src }))`
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  height: 100%;
  width: 100%;
`;

const H2 = styled.span`
  grid-column: 2 / 4;
  grid-row: 1 / 2;
  font-size: 1.5em;
  font-weight: bold;
  text-align: left;
  margin-left: 1em;
`;

const Boxdate = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  text-align: left;
  margin-left: 1em;
`;

const BoxPrice = styled.div`
  grid-column: 3 / 4;
  grid-row: 3/ 4;
  text-align: right;
`;
export {
  ItemBox, Img, H2, Boxdate, BoxPrice,
};
