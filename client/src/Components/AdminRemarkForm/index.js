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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  iconUp: {
    color: 'green',
  },
  iconDown: {
    color: 'red',
  },

});

const AdminRemarkForm = ({ id, ...rest }) => {
  const { adminContextData } = useContext(AdminPageContext);
  const { setModalConfirm, modalConfirm, statementItem } = adminContextData;
  const classes = useStyles();
  return (
    <>
      {modalConfirm && <ModalConfirm id={id} title={rest.title} />}
      <ItemModal {...rest} />
      <BoxBottom>
        <BoxBottomTop name="approved" onClick={(e) => statementItem(e, id)}> <ThumbUpAltIcon className={classes.iconUp}/></BoxBottomTop>
        <BoxBottomReject onClick={() => setModalConfirm(true)}><ThumbDownIcon className={classes.iconDown}/></BoxBottomReject>
      </BoxBottom>
    </>
  );
};

AdminRemarkForm.propTypes = {

  id: PropTypes.string.isRequired,

};
export default AdminRemarkForm;
