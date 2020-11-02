import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ItemModal from '../ItemModal';
import {
  BoxBottom,
  BoxBottomTop,
  BoxBottomReject,

} from './styled';
import ModalConfirm from '../ModalConfirm';
import { AdminPageContext } from '../../Pages/AdminPage/context';

const AdminRemarkForm = ({ id, ...rest }) => {
  const { adminContextData } = useContext(AdminPageContext);
  const { setModalConfirm, modalConfirm, statementItem } = adminContextData;




  return (
    <>
      {modalConfirm && <ModalConfirm id={id} title={rest.title} />}
      <ItemModal {...rest} />
      <BoxBottom>
        <BoxBottomTop name="approved" onClick={(e) => statementItem(e, id)}> Approved</BoxBottomTop>
        <BoxBottomReject onClick={() => setModalConfirm(!modalConfirm)}>Reject</BoxBottomReject>
      </BoxBottom>
    </>
  );
};

AdminRemarkForm.propTypes = {

  id: PropTypes.string.isRequired,

};
export default AdminRemarkForm;
