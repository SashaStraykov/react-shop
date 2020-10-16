import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, WrapperBox, WrapperInput, WrapperConfirmButton,
  WrapperCancel, WrapperTitle,
} from './styled';
import { AdminPageContext } from '../../Pages/AdminPage/context';

const ModalConfirm = ({ id, title }) => {
  const { adminContextData } = useContext(AdminPageContext);
  const { setModalConfirm, modalConfirm } = adminContextData;

  return (
    <Wrapper>
      <WrapperBox>
        <WrapperCancel onClick={() => setModalConfirm(!modalConfirm)}>X</WrapperCancel>
        <form>
          <WrapperTitle>
            The reason for rejection of
            {' '}
            {title}
          </WrapperTitle>
          <WrapperInput />
          <WrapperConfirmButton>Reject</WrapperConfirmButton>
        </form>
      </WrapperBox>
    </Wrapper>
  );
};

ModalConfirm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default ModalConfirm;
