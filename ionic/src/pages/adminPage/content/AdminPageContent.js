import React, { useContext } from 'react';
import { IonAlert, IonSpinner, IonToast } from '@ionic/react';
import Wrapper from '../../../components/wrapper';
import { HOME_PAGE } from '../../../constants';
import { AdminPageContext } from '../context';
import CardComponent from '../../../components/cardComponent';
import './AdminPageContent.css';
import ErrorPage from '../../../components/error';

const AdminPageContent = () => {
  const { adminPageContextData } = useContext(AdminPageContext);
  const {
    loading, unApprovedItems, onStateButtonCard,
    alert, setAlert, alertMessage, idStateAnnouncement, onChangeState,
    showToast, errorMessage, setShowToast, error,
  } = adminPageContextData;
  if (error) {
    return <ErrorPage />;
  }
  return (
    <Wrapper link={HOME_PAGE}>
      <div className="adminTitle">Admin page</div>
      {loading ? <IonSpinner />
        : unApprovedItems.map((item) => (
          <CardComponent
            key={item.id}
            {...item}
            onStateButtonCard={onStateButtonCard}
            onChangeState={onChangeState}
          />
        ))}
      <IonAlert
        isOpen={alert}
        onDidDismiss={() => setAlert(false)}
        header="Write remark to "
        message={alertMessage}
        inputs={[{
          type: 'text',
          placeholder: 'Type remark...',
          id: 'remarkInput',
        }]}
        buttons={[{
          text: 'Change',
          handler: () => {
            const remarkInput = document.getElementById('remarkInput').value;
            const approved = 'rejected';
            onChangeState(idStateAnnouncement, approved, remarkInput);
          },
        }, 'CANCEL']}
      />
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={errorMessage}
        duration={2000}
        color="secondary"
        position="top"
      />
    </Wrapper>
  );
};

export default AdminPageContent;
