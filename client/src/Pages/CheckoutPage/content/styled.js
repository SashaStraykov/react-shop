import styled from 'styled-components';

export const BackGroundGrey = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(238, 238, 238);
  margin-top: 0;
  border: 1px solid rgb(238, 238, 238);
  max-height: 90vh;
  overflow: scroll;
`;
export const H2 = styled.div`
  font-size: 2em;
  font-weight:bold;
  width:80%;
  margin: 1em auto;
  color: rgb(66, 66, 66);
`;
export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  background: rgb(245, 245, 245);
  padding: 0;
  margin-bottom: 1em;
`;

export const ButtonCancel = styled.button`
  font-size: 2em;
  color: var(--font-color);
  border: none;
  background:var(--container-color);
  border-left:2px solid var(--border-color);
  transition:.3s;
  &:focus {
    outline: none;
  }
  &:hover {
    background: var(--brand-color);
    color: rgb(245, 245, 245);
    cursor: pointer;
  }
`;

export const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  border-bottom: 1.5em solid rgb(238, 238, 238);
`;

export const PriceBox = styled.div`
  padding: 1em 2em;
  display:flex;
  justify-content:flex-end;
  margin-left: auto;
  font-weight: bold;
  font-size: 1.2em;
  color: rgb(66, 66, 66);
  margin-top: 2em;
`;
