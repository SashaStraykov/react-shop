import styled from 'styled-components';

export const Nav = styled.nav`
  background: rgb(33, 33, 33);
  display: flex;
  align-items: center;
`;
export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  margin-bottom: 15em;
`;
export const NavLi = styled.li`
  list-style: none;
  padding: 1.5em;
  background: ${(props) => (props.active ? 'var(--brand-color)' : 'none')};
  color: var(--icon-color);
  &:hover {
    color: var(--container-color);
    background: var(--brand-color);
  }
`;
