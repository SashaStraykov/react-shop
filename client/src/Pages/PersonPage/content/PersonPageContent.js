import React, { useContext } from 'react';
import { PersonPageContext } from '../context';
import { PersonPageBox } from './styled';
import Spinner from '../../../Components/Spinner';
import PersonPageHeader from './PersonPageHeader';
import ErrorModal from '../../../Components/ErrorModal';

const PersonPageContent = () => {
  const { contextdataPersonPage } = useContext(PersonPageContext);
  const { loading, error } = contextdataPersonPage;

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorModal />;
  }
  return (
    <PersonPageBox>
      <PersonPageHeader />
    </PersonPageBox>
  );
};

export default PersonPageContent;
