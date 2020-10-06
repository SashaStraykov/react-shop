import styled from "styled-components";

const ModalBox = styled.div`
  width: 50%;
  border: 1px solid rgb(66, 66, 66);
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  background: rgb(238, 238, 238);
`;
const ModalButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em auto;
`;
const ModalButton = styled.div`
  border: ${(props) =>
    props.sign ? "3px solid rgb(66,66,66)" : "1px solid rgb(66,66,66)"};
  padding: 15px 35px;
  margin: 10px;
  font-size: 23px;
  font-weight: bold;
  box-shadow: ${(props) => (props.sign ? "none" : "0 0 10px black;")};
  color: rgb(66, 66, 66);
  &:hover {
    border: 3px solid rgb(66, 66, 66);
    box-shadow: 0 0 10px black;
  }
`;

export { ModalBox, ModalButtonBox, ModalButton };
