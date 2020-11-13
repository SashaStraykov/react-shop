import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackGroundGrey = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(238, 238, 238);
  margin-top: 0;
  max-height: 90vh;
  overflow: scroll;
`;
export const H2 = styled.div`
  font-size: 2em;
  color: rgb(66, 66, 66);
  width:80%;
  margin: 1em auto;
`;

export const ItemBox = styled.div`
  margin:0.5em 0;
  background:var(--container-color);
  display: grid;
  grid-template-columns: 6fr 1fr;
  padding:1em;
`;

export const ButtonCancel = styled.button`
  font-size: 1em;
  color: var(--nav-color);
  border: none;
  transition: 0.3s;
  padding:0.5em 1em;
  margin:0 auto;
  width:100%;
  background:var(--container-color);
    &:focus {
    outline: none;
  }
  &:hover {
    background: var(--brand-color);
    color: rgb(245, 245, 245);
    cursor: pointer;
  }
`;
export const FlexBox = styled.div`
  display:flex;
  flex-direction:row;
`;
export const FlexBoxItems = styled.div`
  display:flex;
  flex-direction:column;
  width:60%;

`;
export const CommentBox = styled.div`
  overflow:scroll;  
  margin: 0.5em;
  background:var(--container-color);
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: stretch;
`;

export const SettingsBox = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  border-left: 2px solid var(--border-color);
`
export const LinkTo = styled(Link)`
  display:flex;
  justify-content:center;
  width:100%;
  transition:0.3s;    
  margin:0;
  &:hover {
    cursor:pointer;
    background:var(--brand-color);
    color:var(--container-color);
}
`;

export const BoxContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 1em;
`;

export const TopContainer = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
`;

export const TopContainerItem = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:2em 2.5em;
  background:var(--container-color);
  font-size:1.5em;
  border-right:2px solid var(--border-color);
  text-align:center;
  line-height:1.4em;
  width:20%;
`

export const TopContainerItemEnd = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:2em 1em;
  background:var(--container-color);
  border-right:2px solid var(--border-color);
  text-align:center;
  width:40%;
`
export const ItemDigit = styled.span`
  font-weight:bold;
  font-size:2.2em;
  margin:0.2em;
`
export const NoComments = styled.span`
  display:flex;
  width:100%;
  justify-content:center;
  margin:2em 0;
  font-size:2em;
`


export const FormBox = styled.form`
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  margin:0.2em 0.5em;
  padding:0.5em;
  background:var(--container-color);
`;

export const InputComment = styled.input`
  width:80%;
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

export const ChatBox = styled.div`
  display:flex;
  flex-direction:column;
  width:40%;
`

export const CommentWrapper = styled.div`
  border-bottom:2px solid var(--border-color);
`

export const ButtonL = styled(Link)`
  display:flex;
  align-items:center;
`
