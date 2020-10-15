import React from 'react';
import PropTypes from 'prop-types';
import ItemModal from '../ItemModal';
import {
  BoxBottom,
  BoxBottomTop,
  BoxBottomInput,
  BoxBottomReject,

} from './Styled';

const AdminRemarkForm = ({ id, ...rest }) => (

  <>
    <ItemModal {...rest} />
    <BoxBottom>
      <BoxBottomTop>Approved</BoxBottomTop>
      <BoxBottomInput />
      <BoxBottomReject>Reject</BoxBottomReject>
    </BoxBottom>
  </>
);

AdminRemarkForm.propTypes = {

  id: PropTypes.string.isRequired,
  rest: PropTypes.shape({
    idCategory: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    img: PropTypes.arrayOf(
      PropTypes.string,
    ).isRequired,
  }),

};
export default AdminRemarkForm;
