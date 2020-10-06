import styled from "styled-components";

const SignInBox = styled.div``;

const LoginPasswordSignIn = styled.div`
  font-size: 1.5em;
  margin-top: 1em;
  font-weight: bold;
  color: rgb(66, 66, 66);
`;

const ErrorSignIn = styled.div`
  margin-top: 0.8em;
  color: red;
  font-size: 1.1em;
`;

const InputCheckBox = styled.input`
  width: 1.5em;
  height: 1.5em;
`;

const ButtonSignIn = styled.button`
  padding: 1em;
  width: 40%;
  margin: 1.2em auto;
  font-size: 1.2em;
  background: white;
  border: 2px solid rgb(66, 66, 66);
  border-radius: 0.2em;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 26px 10px rgb(66, 66, 66);
  }
`;

const InputC = styled.input`
  height: 2em;
  width: 60%;
  margin-top: 0.5em;
  background: transparent;
  border: none;
  border-bottom: 3px solid rgb(66, 66, 66);
  padding: 0.3em;
  font-size: 1.3em;
  font-weight: bold;
  &:focus {
    border: none;
    border-bottom: 3px solid rgb(245, 245, 245);
    outline: none;
  }
`;

export {
  SignInBox,
  LoginPasswordSignIn,
  ErrorSignIn,
  InputCheckBox,
  ButtonSignIn,
  InputC,
};
