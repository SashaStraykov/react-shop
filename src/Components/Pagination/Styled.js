import styled from 'styled-components';

const UlPagination = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LiPagination = styled.li`
  list-style-type: none;
  border: 1px solid black;
  padding: 0.2em;
  border-radius: 0.2em;
  background: ${(props) => (props.active ? 'rgb(132,255,255)' : 'none')};
  &:hover {
    cursor: pointer;
  }
`;
const SpanPagination = styled.span`
  text-decoration: none;
  color: black;
`;
export { UlPagination, LiPagination, SpanPagination };
