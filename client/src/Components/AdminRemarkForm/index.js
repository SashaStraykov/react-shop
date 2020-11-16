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
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const AdminRemarkForm = ({ id, ...rest }) => {
  const { adminContextData } = useContext(AdminPageContext);
  const { setModalConfirm, modalConfirm, statementItem } = adminContextData;
  {console.log(rest.remark)}
  return (
    <>
      {modalConfirm && <ModalConfirm id={id} title={rest.title} />}
      <ItemModal {...rest} />
      <BoxBottom>
        <BoxBottomTop name="approved" onClick={(e) => statementItem(e, id)}> <ThumbUpAltIcon/></BoxBottomTop>
        <BoxBottomReject onClick={() => setModalConfirm(true)}><ThumbDownIcon/></BoxBottomReject>
      </BoxBottom>
    </>
  );
};

AdminRemarkForm.propTypes = {

  id: PropTypes.string.isRequired,

};
export default AdminRemarkForm;
