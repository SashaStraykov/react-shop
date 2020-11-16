import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const H1 = styled.h1`
  color: aliceblue;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 6.25em;
  position:absolute;
`;

export const H2 = styled.h2`
  color: aliceblue;
  font-size: 2.5em;
  position:absolute;
`;

export const ButtonCustom = styled.button`
  padding: 1em 3em;
  border: 2px solid aliceblue;
  color: aliceblue;
  font-size: 1.5em;
  font-weight: bold;
  transition: 0.5s;
  background: transparent;
  &:hover {
    color: var(--brand-color);
    border: 2px solid var(--brand-color);
    cursor: pointer;
  }
`;

const move = keyframes`
0% {
  width: 50%;
}
50% {
  width:55%;
}
100% {
  width: 50%;
}
`;


export const RightPart = styled.div`
  display:flex;
  flex: 1 1 auto;
  flex-basis: 50%;
  transition: flex-basis .5s linear;
  background: url("https://cdn.pixabay.com/photo/2020/11/09/18/54/mountains-5727541_1280.jpg");
  background-size: cover;
  background-position: center;
  justify-content:center;
  align-items:center;
  position:relative;
  &::before {
    content:'';
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:rgba(33,33,33 ,0.3);
  }
`;

export const LeftPart = styled.div`
  display:flex;
  flex: 1 1 auto;
  flex-basis: 50%;
  transition: flex-basis .5s linear;
  background: url("https://cdn.pixabay.com/photo/2020/10/23/09/02/mountain-5678172_1280.jpg");
  background-size: cover;
  background-position:center;
  justify-content:center;
  align-items:center;
  position:relative;

  &::before {
    content:'';
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:rgba(33,33,33 ,0.3);
  }
`;

export const Screen = styled.div`
  display: flex;
  flex:1 1 auto;
  flex-direction:row;
  justify-content:center;
  overflow: hidden;
  position:relative;

  &:hover {
    ${LeftPart} {
      &:not(:hover)  {
      }
      &:hover {
        flex-basis: 80%;
      }
    }

    ${RightPart} {
      &:hover {
        flex-basis: 80%;
      }
      &:not(:hover)  {
      }
    }
  }
`;

export const LinkTo = styled(Link)`
  display:block;
  position:relative;
`;

