import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin: 0 auto;
    margin-bottom:5em;
    width:70%;
`;

export const FormBox = styled.form`
    display:flex;
    flex-direction:row;
    width:100%;
    margin:0.2em auto;
    padding:0.5em;
    background:var(--container-color);
`;

export const InputComment = styled.input`
    width:90%;
    padding:0.5em;
    color: var(--font-color);
    background:var(--background-color);
    border:none;
    border-bottom:2px solid var(--font-color);
        &::placeholder{
        color:var(--font-color);
        };
        &:focus{
            outline:none;
        };
`;

export const CommentButton = styled.button`
    width:10%;
    border:none;
    border-bottom:2px solid var(--font-color);
        &:focus{
            outline:none;
        }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0.2em auto;
  background: var(--container-color);
  padding: 0;
`;

export const H2 = styled.h2`
    color:var(--font-color);
    margin-bottom:1em;
 `;

export const AuthorizathionButton = styled.div`
    background:var(--red-color);
    width:10em;
    margin:0.5em auto;
    color:var(--container-color);
    padding:0.5em;
    font-size:1.2em;
    border-radius:0.2em;
        &:hover{
            background:var(--brand-color);
        }
`;

export const ChatTable = styled.div`
    display:flex;
    max-height:50vh;
    overflow:scroll;
    flex-direction:column;
    margin:0 auto;
    width:100%;
`;
