import React, { useState } from "react";
import "./Slider.css";
// import l1 from "../../images/1.jpeg";
// import l2 from "../../images/2.jpeg";
// import l3 from "../../images/3.jpeg";

function Slider({ img }) {
  // const img = [l1, l2, l3];
  const [i, setI] = useState(0);
  const nextItem = () => {
    i === img.length - 1 ? setI(2) : setI(i + 1);
  };
  const prevItem = () => {
    i === 0 ? setI(0) : setI(i - 1);
  };
  return (
    <div className="sliderBox">
      <span className="prev" onClick={prevItem}>
        &#8249;
      </span>
      <img className="sliderImg" src={img[i]} alt={img[i]} />
      <span className="next" onClick={nextItem}>
        &#8250;
      </span>
    </div>
  );
}

export default Slider;
