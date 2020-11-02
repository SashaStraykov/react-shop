import React from 'react';
import PropTypes from 'prop-types';
import Slider from '../Slider';
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
} from './styled';

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

ItemModal.propTypes = {
  img: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  remark: PropTypes.string.isRequired,
};

export default ItemModal;
