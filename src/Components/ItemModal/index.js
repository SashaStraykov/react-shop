import React from 'react';
import Slider from '../Slider/Slider';
import {
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
} from './Styled';

const ItemModal = ({
  img, title, description, date, price, remark,
}) => (
  <RemarkFormBox>
    <BoxFirstSection>
      <BoxFirstSectionSlider>
        <Slider img={img} />
      </BoxFirstSectionSlider>
      <BoxFirstSectionRight>
        <BoxFirstSectionRightTitle>{title}</BoxFirstSectionRightTitle>
        <BoxFirstSectionRigthDescription>
          {description}
        </BoxFirstSectionRigthDescription>
        <BoxSecondSection>
          <BoxSecondSectionDate>{date}</BoxSecondSectionDate>
          <BoxSecondSectionPrice>
            {price}
            typs
          </BoxSecondSectionPrice>
        </BoxSecondSection>
      </BoxFirstSectionRight>
    </BoxFirstSection>
    {remark && <BoxRemark>{remark}</BoxRemark>}
  </RemarkFormBox>
);

export default ItemModal;
