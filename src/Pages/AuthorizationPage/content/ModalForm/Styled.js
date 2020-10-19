import styled from 'styled-components';

export const ModalBox = styled.div`
  max-width: 30%;
  width:100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  background: var(--nav-color);
`;
export const ModalButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em auto;
`;
export const ModalButton = styled.div`
  border-bottom: ${(props) => (props.sign ? '3px solid var(--brand-color)' : 'none')};
  padding: 15px 35px;
  margin: 10px;
  font-size: 23px;
  font-weight: bold;
  color: ${(props) => (props.sign ? 'var(--brand-color)' : 'var(--icon-color)')};
  &:hover {
    cursor:pointer;
  }
`;
