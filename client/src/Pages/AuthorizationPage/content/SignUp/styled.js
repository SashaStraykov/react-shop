import styled from 'styled-components';

export const SignUpBox = styled.div`
  margin-bottom: 3em;
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
  padding: 1em;
  width: 40%;
  margin: 1.2em auto;
  margin-bottom: 0;
  font-size: 1.2em;
  background: white;
  border: 2px solid rgb(66, 66, 66);
  border-radius: 0.2em;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 26px 10px rgb(66, 66, 66);
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
  }
`;