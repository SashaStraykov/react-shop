import styled from 'styled-components';

export const Wrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(66,66,66 ,0.5);
`
export const Box = styled.div`
    position:relative;
    width:40%;
    top:40%;
    left:50%;
    transform: translateX(-50%);
    padding:2em 5em;
    background:var(--container-color);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
export const ConfirmButton = styled.button`
    padding:0.5em 3em;
    background:var(--red-color);
    margin-top:1.5em;
    color:var(--container-color);
    font-size:1.2em;
    transition:.2s;
    border:none;
    border:1px solid var(--nav-color);
    &:hover{
        cursor:pointer;
        background:var(--brand-color);
    };
    &:focus {
        outline:none;
    }
`
export const Title = styled.span`
font-size:1.5em;
color:var(--nav-color);
`

export const CancelButton = styled.span`
position:absolute;
top:0;
right:0;
margin:0.2em 0.5em;
font-size:1.2em;
padding:0.3em;
font-weight:bold;
&:hover {
    cursor:pointer;
}
`