import styled from "styled-components";

const SliderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  justify-items: center;
  width: 100%;
  height: 100%;
`;

const Arrow = styled.span`
  display: flex;
  align-items: center;
  font-size: 3em;
  width: 10%;
  height: 100%;
  justify-content: center;
  background: rgba(33, 33, 33, 0.2);
  &:hover {
    cursor: pointer;
    background: rgba(33, 33, 33, 0.5);
  }
`;

const SliderIMG = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.backGround}) no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
`;

export { SliderBox, SliderIMG, Arrow };
