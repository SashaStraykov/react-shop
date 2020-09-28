import React, { useState } from "react";
import "./ModalForm.css";
import SighnIn from "../../Components/SighnIn/SighnIn";

function ModalForm() {
  const [sighn, setSighn] = useState(true);

  return (
    <div className="modalDiv">
      <div className="modalButtonBox">
        <div
          onClick={() => setSighn(true)}
          className={sighn ? "modalSighnButton active" : "modalSighnButton"}
        >
          Sighn in
        </div>
        <div
          onClick={() => setSighn(false)}
          className={sighn ? "modalSighnButton" : "modalSighnButton active"}
        >
          Sighn up
        </div>
      </div>
      {sighn ? <SighnIn /> : <h1>no</h1>}
    </div>
  );
}

export default ModalForm;
