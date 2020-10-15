import styled from 'styled-components';

const Nav = styled.nav`
  background: rgb(33, 33, 33);
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: space-between;
`;

const Img = styled.img.attrs((props) => ({ src: props.src, alt: props.src }))`
  height: 3em;
  width: 17em;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 1em 0;
  width: 80%;
  margin: auto auto;
  margin-left: 6em;
  justify-content: space-between;
  align-items: center;
`;
const NavUl = styled.ul`
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

const NavLi = styled.li`
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

const ContainerRight = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 6em;
`;

const PersonItem = styled.div`
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

const NavUlBucket = styled.ul`
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
const BucketItem = styled.div`
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

const NavLiSign = styled.li`
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

const SignBox = styled.div`
  color: white;
`;

const AmountItems = styled.div`
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
export {
  Nav,
  Img,
  Container,
  ContainerRight,
  NavUl,
  NavLi,
  PersonItem,
  NavLiSign,
  SignBox,
  BucketItem,
  NavUlBucket,
  AmountItems,
};
