import styled from 'styled-components';

export const BackGroundGrey = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(238, 238, 238);
  margin-top: 0;
  max-height: 90vh;
  overflow: scroll;
`;
export const H2 = styled.h2`
  font-size: 2em;
  margin: 1em;
  margin-top: 1em;
  display: inline-block;
  color: rgb(66, 66, 66);
`;

export const H2Title = styled.h2`
  font-size: 2em;
  margin: 1em;
  margin-top: 1em;
  color: rgb(66, 66, 66);
`;
export const Container = styled.div`
  width: 80%;
  margin: 2em auto;
  background: rgb(245, 245, 245);
  padding: 0;
  margin-bottom: 1em;
`;

export const TypsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2em;
  align-items: center;
`;
export const TypsBoxLeft = styled.div`
  color: rgb(66, 66, 66);
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 1.5em;
`;

export const TypsBoxRight = styled.div`
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
export const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  border-top: 1.5em solid rgb(238, 238, 238);
`;

export const ButtonCancel = styled.button`
  background: var(--red-color);
  font-size: 2em;
  color: var(--icon-color);
  border: none;
  transition: 0.3s;
  &:focus {
    outline: none;
  }
  &:hover {
    background: var(--brand-color);
    color: rgb(245, 245, 245);
    cursor: pointer;
  }
`;
export const FlexBox = styled.div`
display:flex;
flex-direction:row;
`;
export const FlexBoxItems = styled.div`
display:flex;
flex-direction:column;
width:50%;
`;
export const CommentBox = styled.div`
width:50%;
`;
