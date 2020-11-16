import React, { useContext } from 'react';
import AdminRemarkForm from '../../../Components/AdminRemarkForm';
import { AdminPageContext } from '../context';
import ErrorModal from '../../../Components/ErrorModal';
import Spinner from '../../../Components/Spinner';
import { BackGroundGrey, H2, Container, H21 } from './styled';
import { AppContext } from '../../../App/context';
import Toast from '../../../Components/Toast'

const AdminPageContent = () => {
  const { adminContextData } = useContext(AdminPageContext);
  const { error, loading, unApprovedItems } = adminContextData;
  const { contextData } = useContext(AppContext);
  const { errorMessage } = contextData;
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorModal />;
  }
  return (
    <>
      {errorMessage && <Toast message={errorMessage}/>}
      <BackGroundGrey>
        <H2>Admin page</H2>
        <Container>
          <H21>
            New Items
            <span>&#8595;</span>
          </H21>
        </Container>
        {unApprovedItems.map(({ id, ...rest }) => (
          <Container key={id}>
            <AdminRemarkForm id={id} {...rest} />
          </Container>
        ))}
      </BackGroundGrey>
    </>
  );
};

export default AdminPageContent;
