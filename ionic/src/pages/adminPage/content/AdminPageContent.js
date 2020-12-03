import React, { useContext } from 'react';
import { IonSpinner } from '@ionic/react';
import Wrapper from '../../../components/wrapper';
import { HOME_PAGE } from '../../../constants';
import { AdminPageContext } from '../context';
import CardComponent from '../../../components/cardComponent';

const AdminPageContent = () => {
  const { adminPageContextData } = useContext(AdminPageContext);
  const { loading, unApprovedItems } = adminPageContextData;
  return (
    <Wrapper link={HOME_PAGE}>
      <h1>Admin page</h1>
      {loading ? <IonSpinner />
        : unApprovedItems.map((item) => <CardComponent key={item.id} {...item} />)}
    </Wrapper>
  );
};

export default AdminPageContent;
