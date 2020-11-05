import styled from 'styled-components';

export const BackGroundGrey = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(238, 238, 238);
  margin-top: 0;
  border: 1px solid rgb(238, 238, 238);
`;
export const Container = styled.div`
  width: 70%;
  margin: 1em auto;
  background: rgb(245, 245, 245);
  padding: 0;
  margin-bottom: 1em;
`;
export const H2 = styled.h2`
  font-size: 2em;
  margin: 1em;
  margin-top: 1em;
  display: inline-block;
  color: rgb(66, 66, 66);
`;

export const ContainerItem = styled.div`
  width: 100%;
  border-bottom: 1em solid rgb(238, 238, 238);
`;

export const SearchPannel = styled.input`
  display: flex;
  width: 30em;
  background: transparent;
  color: rgb(66, 66, 66);
  border: none;
  padding: 0.5em;
  font-size: 1.5em;
  font-weight: bold;
  border-bottom: 3px solid rgb(66, 66, 66);
  &:focus {
    outline: none;
  }
`;

export const FlexSearch = styled.form`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin-bottom:3em;
`

export const SearchButton = styled.button`
display:flex;
align-items:center;
border:none;
&:focus{
  outline:none;
},
&:hover {
cursor:pointer,
}
`