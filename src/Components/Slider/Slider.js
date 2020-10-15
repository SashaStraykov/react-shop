
import React, { useState } from 'react';
import { SliderBox, SliderIMG, Arrow } from './Styled';

function Slider({ img }) {
  const [i, setI] = useState(0);
  const nextItem = () => {
    i === img.length - 1 ? setI(2) : setI(i + 1);
  };
  const prevItem = () => {
    i === 0 ? setI(0) : setI(i - 1);
  };
  return (
    <SliderBox>
      <SliderIMG backGround={img[i]}>
        <Arrow onClick={prevItem}>&#8249;</Arrow>
        <Arrow onClick={nextItem}>&#8250;</Arrow>
      </SliderIMG>
    </SliderBox>
  );
}

export default Slider;
