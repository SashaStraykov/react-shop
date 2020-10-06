import React from "react";
import ItemModal from "../ItemModal";
import {
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
} from "./Styled";

const AdminRemarkForm = ({ id, ...rest }) => {
  return (
    <>
      <ItemModal {...rest} />
      <BoxBottom>
        <BoxBottomTop>Approved</BoxBottomTop>
        <BoxBottomInput />
        <BoxBottomReject>Reject</BoxBottomReject>
      </BoxBottom>
      {/* <BoxSlider>
        <Slider img={img} />
      </BoxSlider>
      <BoxTitle>{title}</BoxTitle>
      <BoxDescription>{description}</BoxDescription>
      <BoxDate>{date}</BoxDate>
      <BoxPrice>{price}</BoxPrice>
      <BoxReamrkArea />
      <BoxSentButton>Button</BoxSentButton> */}
    </>
  );
};

export default AdminRemarkForm;
