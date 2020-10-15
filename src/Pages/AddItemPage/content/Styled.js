import styled from 'styled-components';

const Span = styled.span`
  color: rgb(66, 66, 66);
  font-size: 1.6em;
  margin: 1em 0;
`;
const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(245, 245, 245);
  padding: 2em;
  font-size: 1em;
  margin: 0 auto;
`;

const InputC = styled.input`
  width: 40%;
  height: 2em;
  border: none;
  background: rgb(238, 238, 238);
  font-size: 1.2em;
  padding: 0.5em 1em;
  color: rgb(66, 66, 66);

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(66, 66, 66);
  }

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

const Select = styled.select`
  width: 40%;
  background: rgb(238, 238, 238);
  font-size: 1.6em;
  border: none;
  margin-bottom: 2em;
  padding: 0.5em;
  &:focus {
    outline: none;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
`;

const InputDescription = styled.input`
  width: 40%;
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

const Box = styled.div`
  padding: 2em;
  width: 100%;
  background: rgb(238, 238, 238);
`;
const H2 = styled.h2`
  font-size: 2em;
  margin: 1em;
  margin-top: 1em;
  display: inline-block;
  color: rgb(66, 66, 66);
`;

const Container = styled.div`
  width: 70%;
  margin: 1.5em auto;
  background: rgb(245, 245, 245);
  padding: 0;
`;

export {
  Span, Form, InputC, Select, InputDescription, Box, H2, Container,
};
