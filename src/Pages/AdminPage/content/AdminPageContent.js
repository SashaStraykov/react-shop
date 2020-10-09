import React, { useContext } from "react";
import AdminRemarkForm from "../../../Components/AdminRemarkForm";
import { AdminPageContext } from "../context";
import ErrorModal from "../../../Components/ErrorModal";
import Spinner from "../../../Components/Spinner/Spinner";
import { BackGroundGrey, H2, Container } from "./Styled";

const AdminPageContent = () => {
  const { adminContextData } = useContext(AdminPageContext);
  const { error, loading, unApprovedItems } = adminContextData;
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorModal />;
  }
  return (
    <BackGroundGrey>
      <H2>Admin page</H2>
      <Container>
        <H2>
          New Items <span>&#8595;</span>
        </H2>
      </Container>
      {unApprovedItems.map(({ id, ...rest }) => (
        <Container key={id}>
          <AdminRemarkForm id={id} {...rest} />
        </Container>
      ))}
    </BackGroundGrey>
  );
};

export default AdminPageContent;
