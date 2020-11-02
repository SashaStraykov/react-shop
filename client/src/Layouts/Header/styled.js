import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(33, 33, 33);
  padding: 0 3em;
`;

export const Img = styled.img.attrs((props) => ({ src: props.src, alt: props.src }))`
  height: 3em;
  width: 17em;
`;

export const NavUl = styled.ul`
  width: 9em;
  display: none;
  flex-direction: column;
  position: absolute;
  list-style: none;
  margin-top: 1em;
  background: var(--nav-color);
  top: 5.25em;
  right: -1.7em;
  z-index: 10;
`;

export const NavLi = styled.li`
  padding: 0.5em 1em;
  font-size: 1.2em;
  color: var(--icon-color);
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: var(--container-color);
    background: var(--brand-color);
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
`;

export const PersonItem = styled.div`
  padding: 1.5em;
  position: relative;
  color: var(--container-color);
  cursor: pointer;
  &:hover ${NavUl} {
    display: flex;
  }
  &:hover {
    color: var(--brand-color);
  }
`;

export const NavUlBucket = styled.ul`
  width: 9em;
  display: none;
  flex-direction: column;
  position: absolute;
  list-style: none;
  margin-top: 1em;
  background: var(--nav-color);
  top: 5.12em;
  right: -1.7em;
  z-index: 10;
`;

export const BucketItem = styled.div`
  padding: 1.5em;
  position: relative;
  cursor: pointer;
  color: var(--container-color);
  &:hover {
    color: var(--brand-color);
  }
  &:hover ${NavUlBucket} {
    display: flex;
  }
`;

export const NavLiSign = styled.li`
  background: #263238;
  padding: 0.5em 1em;
  font-size: 1.2em;
  color: white;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: var(--container-color);
    background: var(--brand-color);
  }
`;

export const SignBox = styled.div`
  color: white;
`;

export const AmountItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e53935;
  color: #212121;
  position: absolute;
  top: 0.9em;
  right: 0.9em;
  width: 1.5em;
  height: 1.5em;
  border-radius: 100%;
`;
