import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { ModalBox, ModalButtonBox, ModalButton } from "./Styled";

function ModalForm() {
  const [sign, setSign] = useState(true);
  return (
    <ModalBox>
      <ModalButtonBox>
        <ModalButton sign={sign} onClick={() => setSign(true)}>
          Sign in
        </ModalButton>
        <ModalButton onClick={() => setSign(false)} sign={!sign}>
          Sign up
        </ModalButton>
      </ModalButtonBox>
      {sign ? <SignIn /> : <SignUp />}
    </ModalBox>
  );
}

export default ModalForm;
