import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, WrapperBox, WrapperInput, WrapperConfirmButton,
  WrapperCancel, WrapperTitle, Form
} from './styled';
import { AdminPageContext } from '../../Pages/AdminPage/context';

const ModalConfirm = ({ id, title }) => {
  const { adminContextData } = useContext(AdminPageContext);
  const {
    setModalConfirm, statementItem, rejectedInput, setRejectedInput,
  } = adminContextData;

  return (
    <Wrapper>
      <WrapperBox>
        <WrapperCancel onClick={() => setModalConfirm(false)}>X</WrapperCancel>
        <Form name="rejected" onSubmit={(e) => { statementItem(e, id)}}>
          <WrapperTitle>
            The reason for rejection of
            {' '}
            {title}
          </WrapperTitle>
          <WrapperInput value={rejectedInput} onChange={(e) => setRejectedInput(e.target.value)} />
          <WrapperConfirmButton>Reject</WrapperConfirmButton>
        </Form>
      </WrapperBox>
    </Wrapper>
  );
};

ModalConfirm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default ModalConfirm;
