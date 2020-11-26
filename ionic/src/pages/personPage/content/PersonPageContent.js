import React, { useContext } from 'react';
import {
  IonItem,
  IonContent,
  IonList,
  IonPage,
  IonSpinner,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonAlert,
} from '@ionic/react';
import Header from '../../../layouts/header';
import { HOME_PAGE } from '../../../constants';
import { PersonPageContext } from '../context';
import ProductComponent from '../../../components/productComponent';
import './PersonPage.css';

const PersonPageContent = () => {
  const { personPageContextData } = useContext(PersonPageContext);
  const {
    loading,
    myAnouncement,
    alert,
    setAlert,
    alertMessage,
    setIdDeleteAnnouncement,
    idDeleteAnnouncement,
    onDelete,
  } = personPageContextData;
  return (
    <>
      <IonPage>
        <Header linkTo={HOME_PAGE} />
        <IonContent>
          <div className="personPageAnouncementTitle">
            My anouncement
            <span>&#8595;</span>
          </div>
          {loading
            ? <IonSpinner />
            : (
              <IonList>
                {myAnouncement.map((announcement) => (
                  <IonItemSliding key={announcement.id}>
                    <IonItem>
                      <ProductComponent {...announcement} />
                    </IonItem>
                    <IonItemOptions side="end" onClick={() => { setIdDeleteAnnouncement(announcement.id); setAlert(true); }}>
                      <IonItemOption color="danger">
                        Delete
                      </IonItemOption>
                    </IonItemOptions>
                  </IonItemSliding>
                ))}
              </IonList>
            )}
          <IonAlert
            isOpen={alert}
            onDidDismiss={() => setAlert(false)}
            header="Do you really want delete"
            message={alertMessage}
            buttons={[{
              text: 'Yes',
              handler: (e) => {
                onDelete(e, idDeleteAnnouncement);
              },
            }, 'CANCEL']}
          />
        </IonContent>
      </IonPage>

    </>
  );
};

export default PersonPageContent;
