import React, { useContext } from 'react';
import {
  IonItem,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonAlert,
  IonIcon,
} from '@ionic/react';
import {
  trashOutline,
} from 'ionicons/icons';
import { InfoPageContext } from '../context';
import ProductComponent from '../../../components/productComponent';
import './PersonPageInfoContent.css';
import ErrorPage from '../../../components/error';
import { CATEGORIES_PAGE } from '../../../constants';
import Spinner from '../../../components/spinner';

const PersonPageInfoContent = () => {
  const { infoPageContextData } = useContext(InfoPageContext);
  const {
    loading,
    error,
    myAnouncement,
    alert,
    setAlert,
    alertMessage,
    idDeleteAnnouncement,
    setIdDeleteAnnouncement,
    onDelete,
    setAlertMessage,
  } = infoPageContextData;
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <>
      <div className="personPageTitle">My announcement</div>
      {myAnouncement.map((announcement) => (
        <IonItemSliding key={announcement.id}>
          <IonItem className="personPageInfoProduct" routerLink={`${CATEGORIES_PAGE}/${announcement.idCategory}/${announcement.id}`}>
            <ProductComponent {...announcement} />
          </IonItem>
          <IonItemOptions side="end" onClick={() => { setIdDeleteAnnouncement(announcement.id); setAlert(true); setAlertMessage(announcement.title); }}>
            <IonItemOption color="danger">
              <IonIcon icon={trashOutline} className="personPageDeleteIcon" />
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
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

export default PersonPageInfoContent;
