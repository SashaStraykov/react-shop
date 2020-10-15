import styled from 'styled-components';

const BoxBottom = styled.form`
  display: flex;
  flex-direction: column;
`;

const BoxBottomTop = styled.button`
  color: rgb(66, 66, 66);
  padding: 1em;
  border: none;
  background: rgb(197, 225, 165);
  font-size: 1.1em;
  &:hover {
    background: rgb(66, 66, 66);
    color: rgb(245, 245, 245);
  }
  &:focus {
    outline: none;
  }
`;

const BoxBottomInput = styled.input`
  height: 3em;
  font-size: 1em;
  padding-left: 1em;
`;

const BoxBottomReject = styled.button`
  color: rgb(66, 66, 66);
  padding: 1em;
  border: none;
  background: rgb(239, 154, 154);
  font-size: 1.1em;
  &:hover {
    background: rgb(66, 66, 66);
    color: rgb(245, 245, 245);
  }
  &:focus {
    outline: none;
  }
`;
// const RemarkFormBox = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-template-rows: 1fr 2fr 1fr 1fr 1fr;
//   margin: 3em auto;
// `;

// const BoxSlider = styled.div`
//   grid-column: 1/2;
//   grid-row: 1/4;
//   width: 30em;
//   height: 20em;
//   border: 2px solid red;
// `;

// const BoxTitle = styled.div`
//   grid-column: 2/4;
//   grid-row: 1/2;
//   border: 1px solid black;
// `;

// const BoxDescription = styled.div`
//   grid-column: 2/4;
//   grid-row: 2/3;
//   overflow: scroll;
//   border: 1px solid black;
// `;

// const BoxDate = styled.div`
//   grid-column: 2/3;
//   grid-row: 3/4;
//   border: 1px solid black;
// `;

// const BoxPrice = styled.div`
//   grid-column: 3/4;
//   grid-row: 3/4;
//   border: 1px solid black;
// `;
// const BoxReamrkArea = styled.input`
//   grid-column: 1/4;
//   grid-row: 4/5;
//   border: 1px solid black;
// `;
// const BoxSentButton = styled.button`
//   grid-column: 1/2;
//   grid-row: 5/6;
// `;
export {

  BoxBottom,
  BoxBottomTop,
  BoxBottomInput,
  BoxBottomReject,
  // BoxSlider,
  // BoxTitle,
  // BoxDescription,
  // BoxDate,
  // BoxPrice,
  // BoxReamrkArea,
  // BoxSentButton,
};
