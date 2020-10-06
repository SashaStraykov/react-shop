import styled from "styled-components";

const Span = styled.span`
  color: rgb(66, 66, 66);
  font-size: 1.6em;
  margin-right: auto;
  margin-top: 1.5em;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const InputC = styled.input`
  width: 30%;
  height: 2em;
  border: none;
  border-bottom: 2px solid rgb(66, 66, 66);
  background: transparent;
  font-size: 1.2em;
  padding: 0.2em 1em;
  color: rgb(66, 66, 66);

  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  width: 30%;
  background: transparent;
  margin-top: 2em;
  font-size: 1.6em;
  border: none;
  margin-bottom: 2em;
  &:focus {
    outline: none;
  }
`;

const InputDescription = styled.input`
  width: 80%;
  height: 6em;
  border: none;
  border-bottom: 2px solid rgb(66, 66, 66);
  background: transparent;
  font-size: 1.2em;
  padding: 0.2em 1em;
  color: rgb(66, 66, 66);
  white-space: wrap;

  &:focus {
    outline: none;
  }
`;

export { Span, Form, InputC, Select, InputDescription };
