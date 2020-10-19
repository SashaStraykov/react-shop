import styled from 'styled-components';

export const BoxBottom = styled.form`
  width:55%;
  margin-left:auto;
  display: flex;
  flex-direction: row;
  justify-content:center;

`;

export const BoxBottomTop = styled.button`
  color: rgb(66, 66, 66);
  padding: 1em;
  border: none;
  background: rgb(197, 225, 165);
  font-size: 1.1em;
  &:hover {
    background: rgb(66, 66, 66);
    color: rgb(245, 245, 245);
    cursor:pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const BoxBottomInput = styled.input`
  height: 3em;
  font-size: 1em;
  padding-left: 1em;
`;

export const BoxBottomReject = styled.div`
  color: rgb(66, 66, 66);
  padding: 1em;
  border: none;
  background: rgb(239, 154, 154);
  font-size: 1.1em;
  &:hover {
    background: rgb(66, 66, 66);
    color: rgb(245, 245, 245);
    cursor:pointer;
  }
  &:focus {
    outline: none;
  }
`;
