import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from{
    transform:rotate(0deg);
}
to {
    transform:rotate(360deg);
}
`;

const SpinnerDiv = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid black;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${rotate} 1s linear infinite;
  margin: 250px auto;
`;

export { SpinnerDiv };
