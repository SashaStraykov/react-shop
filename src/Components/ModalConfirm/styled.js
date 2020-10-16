import styled from 'styled-components';

const Wrapper = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:110vh;
background: rgba(33,33,33, .5);
z-index:100;
`;
const WrapperBox = styled.div`
position:relative;
margin: auto auto;
top:50%;
transform:translateY(-50%); 
width:40%;
background: var(  --container-color);
display:flex;
flex-direction:column;
justify-content:center;
`;
const WrapperInput = styled.input`
width:80%;
height:2.5em;
padding:0.5em 1em;
font-size:1em;
margin:0 auto;
color:var(--font-color);
margin-top:2em;
&:focus{
    outline:none;
}
`;
const WrapperConfirmButton = styled.button`
display:flex;
padding:1em 3em;
justify-content:center;
width:10em;
background:var(--red-color);
margin:2em auto;
color:var(--container-color);
border:none;    
border-radius:0.2em;
transition:0.3s;
&:focus{
    outline:none;
}
&:hover{
    background:var(--brand-color);
    cursor:pointer;
}
`;

const WrapperCancel = styled.div`
position:absolute;
top:0;
right:0;
font-size:2em;
margin:0.3em;
color:var(--icon-color);
&:hover{
cursor:pointer;
}
`;

const WrapperTitle = styled.div`
font-size:1.5em;
display:flex;
justify-content:flex-start;
margin:0 3em;
margin-top:1.5em;
color:var(--font-color);

`;
export {
  Wrapper, WrapperBox, WrapperInput, WrapperConfirmButton,
  WrapperCancel, WrapperTitle,
};
