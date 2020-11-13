import styled from 'styled-components';

export const ChatBox = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
padding:1em;
position:relative;
`;
export const PersonAvatar = styled.img`
width:5em;
height:5em;
`;
export const AvatarBox = styled.div`
display:flex;
flex-direction:column;
margin:0 1.5em;
margin-left:0;

`;

export const AvatarName = styled.span`
margin:0.2em auto;
margin-bottom:0;
font-size:1.1em;
color:var(--font-color);
`;

export const CommentBox = styled.div`
display:flex;
flex-direction:column;
margin-top:0.5em;
justify-content:flex-start;
overflow:hidden;
`;

export const CommentTimeStamp = styled.span`
color:var(--font-color);
display:flex;
justify-content:flex-start;
font-size:0.9em;
`;
export const Comment = styled.span`
color:var(--font-color);
font-size:1.1em;
margin-top:1em;
overflow:hidden;
text-align:left;
`;

export const DeleteButton = styled.div`
position:absolute;
top:10px;
right:15px;
&:hover {
    cursor:pointer;
}
`