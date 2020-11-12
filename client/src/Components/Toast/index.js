import React, { useContext} from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {AuthorizationPageContext} from '../../Pages/AuthorizationPage/context'

const useStyles = makeStyles({
  toast: {
    background: 'var(--brand-color)',
  },

});

const Toast = ({message}) => {
  const {authorizationContextData} = useContext(AuthorizationPageContext)
  const {openToast, setOpenToast} = authorizationContextData
  const classes = useStyles();


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenToast(false);
  };

  return (
    <>
      <Snackbar
      className={classes.toast}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={openToast}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
        action={
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
        }
      />
    </>
  );

}

export default Toast
