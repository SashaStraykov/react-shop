import styled from 'styled-components';

export const SignInBox = styled.div``;

export const LoginPasswordSignIn = styled.div`
  font-size: 1.5em;
  margin-top: 1em;
  font-weight: bold;
  color: var(--icon-color);
`;

export const ErrorSignIn = styled.div`
  margin-top: 0.8em;
  color: var(  --red-color);
  font-size: 1.1em;
`;

export const ButtonSignIn = styled.button`
  padding: 1em;
  width: 40%;
  margin: 1.2em auto;
  font-size: 1.3em;
  font-weight:bold;
  background: var(--brand-color);
  border: 2px solid var(--icon-color);
  border-radius: 0.2em;
  color:var(--icon-color);
  &:hover {
    cursor: pointer;
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
  border-bottom: 3px solid var(  --icon-color);
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
export const InputP = styled.input`
  height: 2em;
  width: 75%;
  margin-top: 0.5em;
  background: transparent;
  border: none;
  border-bottom: 3px solid var(  --icon-color);
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

export const PasswordBox = styled.div`
  padding-left: 20%;
  display: flex;
  justify-content: stretch;
  margin: 0 auto;
`;
export const PasswordBoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
