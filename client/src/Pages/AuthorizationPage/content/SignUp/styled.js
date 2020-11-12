import styled from 'styled-components';



export const SignUpBox = styled.div`
  margin:auto 0;  
  width:100%;
  position:relative;
`;

export const Logs = styled.div`
  font-size: 1.5em;
  margin-top: 1em;
  font-weight: bold;
  color: var(--icon-color);
`;

export const ErrorSignUp = styled.div`
  margin-top: 0.8em;
  color: red;
  font-size: 1.1em;
`;

export const ButtonSignUp = styled.button`
  position:relative;
  left:10%;
  padding: 0.5em 1em;
  width: 40%;
  margin: 1.2em 0;
  font-size: 1.3em;
  font-weight:bold;
  background: var(--nav-color);
  border: 2px solid var(--icon-color);
  border-radius: 0.2em;
  color:var(--icon-color);
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background: var(--brand-color);
  }
  &:focus{
    outline:none;
  }
`;

export const InputC = styled.input`
  height: 2em;
  width: 60%;
  margin-top: 0.5em;
  background: transparent;
  border: none;
  border-bottom: 3px solid var(--icon-color);
  padding: 0.3em;
  font-size: 1.3em;
  font-weight: bold;
  color:var(--brand-color);
  &:focus {
    border: none;
    border-bottom: 3px solid var(--brand-color);
    outline: none;
  };
  &::placeholder {
    color:var(--icon-color);
  }
`;

export const Form = styled.form`
  display:flex;
  flex-direction:column;
  position:relative;
  left:20%;
`