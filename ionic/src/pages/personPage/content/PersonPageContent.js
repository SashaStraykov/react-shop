import React, { useContext } from 'react';
import {
  IonContent,
  IonPage,
  IonIcon,
  IonToast,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/react';
import { documentsOutline, duplicateOutline, documentAttachOutline } from 'ionicons/icons';
import Header from '../../../layouts/header';
import { HOME_PAGE } from '../../../constants';
import { PersonPageContext } from '../context';
import BackGround from '../../../components/backGround';
import './PersonPage.css';
import AddProductPage from '../../addProductPage';
import InfoPage from '../../personPageInfo';
import ConsiderationPage from '../../considerationPage';

const PersonPageContent = () => {
  const { personPageContextData } = useContext(PersonPageContext);
  const {
    showToast,
    setShowToast,
    errorMessage,
    personPageSegment,
    setPersonPageSegment,
  } = personPageContextData;
  return (
    <>
      <IonPage>
        <Header linkTo={HOME_PAGE} />
        <IonContent>
          <BackGround>
            <IonSegment
              className="personPageSegment"
              value={personPageSegment}
              onIonChange={(e) => setPersonPageSegment(e.detail.value)}
            >
              <IonSegmentButton className="personPageSegmentButton" value="personProducts">
                <IonLabel className="personPageSegmentLabel">
                  <IonIcon icon={documentsOutline} className="personPageSegmentIcon" />
                </IonLabel>
              </IonSegmentButton>
              <IonSegmentButton className="personPageSegmentButton" value="personAddProduct">
                <IonLabel className="personPageSegmentLabel">
                  <IonIcon icon={duplicateOutline} />
                </IonLabel>
              </IonSegmentButton>
              <IonSegmentButton className="personPageSegmentButton" value="personExpectationProduct">
                <IonLabel className="personPageSegmentLabel">
                  <IonIcon icon={documentAttachOutline} />
                </IonLabel>
              </IonSegmentButton>
            </IonSegment>
            {personPageSegment === 'personProducts' ? <InfoPage /> : (personPageSegment === 'personAddProduct') ? <AddProductPage /> : <ConsiderationPage />}
            <IonToast
              isOpen={showToast}
              onDidDismiss={() => setShowToast(false)}
              message={errorMessage}
              duration={2000}
              color="secondary"
              position="bottom"
            />
          </BackGround>
        </IonContent>
      </IonPage>
    </>
  );
};

export default PersonPageContent;
