import styled from 'styled-components';

export const RemarkFormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: rgb(66, 66, 66);
  font-size: 1.1em;
`;

export const BoxFirstSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoxFirstSectionSlider = styled.div`
  display: flex;
  width: 45%;
  height: 25em;
`;

export const BoxFirstSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  align-content: stretch;
  width: 55%;
`;

export const BoxFirstSectionRightTitle = styled.div`
  display: flex;
  height: 20%;
  align-self: center;
  vertical-align: center;
  align-items: center;
`;

export const BoxFirstSectionRigthDescription = styled.div`
  display: flex;
  height: 60%;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  padding: 1em;
  width: 100%;
  text-align: justify;
  padding-top: 4em;
`;

export const BoxSecondSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
`;

export const BoxSecondSectionDate = styled.div`
  display: flex;
  width: 50%;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const BoxSecondSectionPrice = styled.div`
  display: flex;
  width: 50%;
  align-self: center;
  justify-content: center;
  align-items: center;  
  height: 100%;
`;

export const BoxRemark = styled.div`
  color: red;
  padding: 1em;
  border-top: 1px solid rgb(66, 66, 66);
`;
