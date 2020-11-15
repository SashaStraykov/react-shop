import styled from 'styled-components';

export const DivGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const BackGroundGrey = styled.div`
  background: var(--background-color);
  flex: 1 1 auto;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1em;
`;

export const H2 = styled.div`
  font-size: 2em;
  font-weight:bold;
  width:70%;
  margin: 1em auto;
  color: rgb(66, 66, 66);
`;
