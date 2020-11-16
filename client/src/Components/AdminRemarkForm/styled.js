import styled from 'styled-components';

export const BoxBottom = styled.form`
  width:40%;
  margin:0 auto;
  padding:1em;
  display: flex;
  flex-direction: row;
  justify-content:space-around;

`;

export const BoxBottomTop = styled.button`
  border-radius:50%;
  color: rgb(66, 66, 66);
  padding: 1em;
  border: 2px solid green;
  background: none;
  font-size: 1.1em;
  transition:0.3s;
  &:hover {
    background: rgba(238,238,238 ,1);
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
  border-radius:50%;
  color: rgb(66, 66, 66);
  padding: 1em;
  border: 2px solid red;
  background: none;
  font-size: 1.1em;
  text-align: center;
  transition:0.3s;
  &:hover {
    background: rgba(238,238,238 ,1);
    color: rgb(245, 245, 245);
    cursor:pointer;
  }
  &:focus {
    outline: none;
  }
`;
