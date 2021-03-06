import styled from 'styled-components';

export const UlPagination = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LiPagination = styled.li`
  margin:1em 0;
  list-style-type: none;
  border: 1px solid black;
  padding: 0.2em;
  border-radius: 0.2em;
  background: ${(props) => (props.active ? 'rgb(132,255,255)' : 'none')};
  &:hover {
    cursor: pointer;
  }
`;
export const SpanPagination = styled.span`
  text-decoration: none;
  color: black;
`;
