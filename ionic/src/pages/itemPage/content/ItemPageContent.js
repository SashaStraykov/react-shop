import React, { useContext } from 'react';
import {
  IonContent, IonPage, IonSpinner, IonButton,
} from '@ionic/react';
import { CATEGORIES_PAGE } from '../../../constants';
import Header from '../../../layouts/header';
import { ItemPageContext } from '../context';
import BackGround from '../../../components/backGround';
import './itemPageContent.css';
import Slider from '../../../components/slider';

const ItemPageContent = () => {
  const { itemPageContextData } = useContext(ItemPageContext);
  const { category, loading, item } = itemPageContextData;
  const {
    title, img, price, date, description,
  } = item;
  return (
    <IonPage>
      <Header linkTo={`${CATEGORIES_PAGE}/${category}`} />
      <IonContent>
        <BackGround>
          {loading ? <IonSpinner /> : (
            <div className="itemPageBox">
              <div className="itemPageTitle">{title}</div>
              <div>
                {img && <Slider img={img} />}
              </div>
              <div className="itemPageDescription">{description}</div>
              <IonButton className="itemPageBucketButton" color="secondary" expand="full" fill="outline">Add to bucket</IonButton>
            </div>
          ) }
        </BackGround>
      </IonContent>
    </IonPage>

  );
};

export default ItemPageContent;
