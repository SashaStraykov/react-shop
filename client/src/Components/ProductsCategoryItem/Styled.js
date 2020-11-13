import styled from 'styled-components';

export const ItemBox = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:15em;

`;

export const Img = styled.img.attrs((props) => ({ src: props.src, alt: props.src }))`
  width:40%;
  height:100%;
`;

export const TitleBox = styled.div`
font-size:1.5em;
font-weight:bold;
padding: 12px 24px;
height:20%;
`;

export const Boxdate = styled.div`
display:flex;
width:50%;
justify-content:center;
align-items:center;
`;

export const BoxPrice = styled.div`
  display:flex;
  width:50%;
  justify-content:center;
  align-items:center;
  border-left:2px solid var(--border-color);
`;

export const InfoBox = styled.div`
display: flex;
flex-direction:column;
width:60%;
`

export const InfoBoxBottom = styled.div`
display:flex;
flex-direction:row;
height:20%;

`

export const DescriptionBox = styled.div`
display:flex;
height:60%;
width:100%;
overflow:scroll;
padding: 12px 24px;
color: var(--nav-color);
`