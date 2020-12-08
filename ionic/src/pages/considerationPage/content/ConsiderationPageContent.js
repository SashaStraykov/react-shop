import { IonSpinner, IonAlert } from '@ionic/react';
import React, { useContext } from 'react';
import CardComponent from '../../../components/cardComponent';
import { ConsiderationPageContext } from '../context';
import ErrorPage from '../../../components/error';
import './ConsiderationPageContent.css';

const ConsiderationPageContent = () => {
  const { considerationPageContextData } = useContext(ConsiderationPageContext);
  const {
    loading,
    considerationProducts,
    error,
    onDelete,
    idDeleteAnnouncement,
    alertMessage,
    setAlert,
    alert,
    onDeleteButtonCard,
  } = considerationPageContextData;
  if (loading) {
    return <IonSpinner />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <>
      <div className="considerationTitle">Consideration products</div>
      {considerationProducts.map(({ id, ...rest }) => (
        <CardComponent
          key={id}
          id={id}
          {...rest}
          onDeleteButtonCard={onDeleteButtonCard}
          consideration
        />
      ))}
      <IonAlert
        isOpen={alert}
        onDidDismiss={() => setAlert(false)}
        header="Do you really want delete"
        message={alertMessage}
        buttons={[{
          text: 'Yes',
          handler: () => {
            onDelete(idDeleteAnnouncement);
          },
        }, 'CANCEL']}
      />
    </>
  );
};

export default ConsiderationPageContent;
