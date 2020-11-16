import styled, {keyframes, css } from 'styled-components';

const moveSignIn = keyframes`
0% {
    left:0%;
    width:40%
}
50% {
  width:65%
}
100% {
    left:60%;
    width:40%
}
`;

const moveSignUp = keyframes`
0% {
    left:40%;
    width:50%
}
50% {
  width:65%
}
100% {
    left:0%;
    width:40%
}
`;

export const ModalBox = styled.div`
  max-width: 60%;
  width:100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column; 
  background: var(--nav-color);
  min-height:35em;
  position:relative;
  overflow:hidden;

`;

export const ModalButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  position:absolute;
  height:100%;
  z-index:5;
  background:var(--icon-color);
  animation: ${props => (props.sign ? css`${moveSignIn} .5s ease-in-out forwards` : css`${moveSignUp} .5s ease forwards`)};
`;

export const ModalButton = styled.div`
  /* border-bottom: ${(props) => (props.sign ? '3px solid var(--brand-color)' : 'none')}; */
  padding: 15px 35px;
  margin: 10px;
  font-size: 23px;
  font-weight: bold;
  color: var(--nav-color);
  border: 2px solid var(--nav-color);
  border-radius: 0.2em;
  &:hover {
    cursor:pointer;
  }
`;

const moveSignInLeft = keyframes`
0% {
    left:40%;
    opacity:0;
}
50% {
  opacity:0;
  left:20%;
}
100% {
    opacity:1;
    left:0%;

}
`;

const moveSignInRight = keyframes`
0% {
    left:0%;
    opacity:1;
}
50% {
  opacity:0;
  left:20%;
}
100% {
    opacity:0;
    left:40%;

}
`;

export const SignInBox = styled.div`
position:absolute;
width:60%;
top:60%;
transform:translateY(-60%);
animation: ${props => (props.sign ? css`${moveSignInLeft} .5s ease-in-out forwards` : css`${moveSignInRight} .5s ease forwards`)};
z-index: ${props => (props.sign? '2':'1')};
`
const moveSignUpRight = keyframes`
0% {
    left:0%%;
    opacity:0;
}
50% {
    left:20%;
    opacity:0;
}
100% {
    left:40%;
    opacity:1;
}
`;

const moveSignUpLeft = keyframes`
0% {
    left:40%;
    opacity:1;
}
50% {
  opacity:0;
  left:20%;
}
100% {
    opacity:0;
    left:0%;

}
`;

export const SignUpBox = styled.div` 
  position:absolute;
  width:60%;
  top:60%;
  transform:translateY(-60%);
  animation: ${props => (props.sign ? css`${moveSignUpLeft} .5s ease-in-out forwards` : css`${moveSignUpRight} .5s ease forwards`)};
  z-index: ${props => (props.sign? '1':'2')}
`;

export const TextArea = styled.div`
  color:var(--background-color);
  font-size:2em;
  position:relative;
  top: 0;
  text-align:center;
  margin:0.5em;
`

