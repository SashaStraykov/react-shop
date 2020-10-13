import React from "react";
import ItemModal from "../ItemModal";
import {
  BoxBottom,
  BoxBottomTop,
  BoxBottomInput,
  BoxBottomReject,

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
    </>
  );
};

export default AdminRemarkForm;
