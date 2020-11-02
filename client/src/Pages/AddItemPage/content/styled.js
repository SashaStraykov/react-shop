import styled from 'styled-components';

export const Span = styled.span`
  color: var(--brand-color);
  font-size: 1.6em;
  display:flex;
  width:40%;
  justify-content:flex-end;
  padding-right:1em;
`;

export const BoxInfo = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
margin:1em;
width:100%;
align-items:center;
`;
export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--nav-color);
  padding: 2em;
  font-size: 1em;
  margin: 0 auto;
`;

export const InputC = styled.input`
  width: 60%;
  height: 2em;
  border: none;
  background: rgb(238, 238, 238);
  font-size: 1.2em;
  padding: 0.5em 1em;
  color: rgb(66, 66, 66);
  &::placeholder {
    color: var(--icon-color);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(66, 66, 66);
  }

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const Select = styled.select`
  width: 60%;
  background: rgb(238, 238, 238);
  font-size: 1.6em;
  border: none;
  padding: 0.5em;
  color: var(--icon-color);
  &:focus {
    outline: none;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const InputDescription = styled.input`
  width: 60%;
  height: 6em;
  border: none;
  background: rgb(238, 238, 238);
  font-size: 1.2em;
  padding: 0.2em 1em;
  color: rgb(66, 66, 66);
  white-space: wrap;

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(66, 66, 66);
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const Box = styled.div`
  padding: 2em;
  width: 100%;
  background: rgb(238, 238, 238);
  overflow:scroll;
  height:100vh;
`;
export const H2 = styled.h2`
  font-size: 2em;
  margin-bottom:1em;
  display: inline-block;
  color: rgb(66, 66, 66);
`;

export const Container = styled.div`
  width: 80%;
  margin: 1.5em auto;
  background: rgb(245, 245, 245);
  padding: 0;
`;

export const Button = styled.button`
  margin: 2em;
  padding: 0.5em 6em;
  background: transparent;
  color: var(--icon-color);
  border: 2px solid var(--icon-color);
  transition:0.3s;
  font-size:1.2em;
  font-weight:bold;
  &:focus {
    outline:none;
  };
  &:hover {
    background:var(--brand-color);
    color:var(--container-color);
    cursor:pointer;
  }
`;
