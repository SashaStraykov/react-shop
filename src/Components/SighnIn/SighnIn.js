import React, { useState } from "react";
import "./SighnIn.css";
import InputComponent from "../InputComponent/InputComponent";

function SighnIn() {
  const [vissiblePasword, setVissiblePassword] = useState(true);
  return (
    <div className="sighnInBox">
      <form>
        <div className="LoginPasswordLoghIn">Login</div>
        <InputComponent />
        <div className="errorSighnIn">*error</div>
        <div className="LoginPasswordLoghIn">Password</div>
        <InputComponent type={vissiblePasword ? "password" : "text"} />
        <div className="errorSighnIn">*error</div>
        <br></br>
        <input
          onChange={() => setVissiblePassword(!vissiblePasword)}
          id="password"
          className="checkBoxSighnIn"
          type="checkbox"
        />
        <label htmlFor="password"> Vissible password</label>
        <br></br>
        <button className="buttonSighnIn" type="submit">
          SIGHN IN
        </button>
      </form>
    </div>
  );
}

export default SighnIn;
