import styled from "styled-components";

const RemarkFormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: rgb(66, 66, 66);
  font-size: 1.1em;
  border: 1px solid rgb(66, 66, 66);
`;

const BoxFirstSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const BoxFirstSectionSlider = styled.div`
  display: flex;
  width: 40%;
  height: 20em;
`;

const BoxFirstSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  align-content: stretch;
  width: 100%;
`;

const BoxFirstSectionRightTitle = styled.div`
  display: flex;
  height: 33.33%;
  align-self: center;
  vertical-align: center;
  align-items: center;
`;

const BoxFirstSectionRigthDescription = styled.div`
  display: flex;
  height: 33.33%;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid rgb(66, 66, 66);
  border-bottom: 1px solid rgb(66, 66, 66);
  overflow: scroll;
  padding: 1em;
  width: 100%;
`;

const BoxSecondSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 33.33%;
`;

const BoxSecondSectionDate = styled.div`
  display: flex;
  width: 50%;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

const BoxSecondSectionPrice = styled.div`
  display: flex;
  width: 50%;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-left: 1px solid rgb(66, 66, 66);
  height: 100%;
`;

const BoxRemark = styled.div`
  color: red;
  padding: 1em;
  border-top: 1px solid rgb(66, 66, 66);
`;
export {
  RemarkFormBox,
  BoxFirstSection,
  BoxFirstSectionSlider,
  BoxFirstSectionRight,
  BoxFirstSectionRightTitle,
  BoxFirstSectionRigthDescription,
  BoxSecondSection,
  BoxSecondSectionDate,
  BoxSecondSectionPrice,
  BoxRemark,
};
