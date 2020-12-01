import {
  IonContent,
  IonItemSliding,
  IonPage,
  IonSpinner,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import {
  trashOutline,
  logoUsd,
} from 'ionicons/icons';
import React, { useContext } from 'react';
import Header from '../../../layouts/header';
import { HOME_PAGE, CATEGORIES_PAGE } from '../../../constants';
import './CheckOutPageContent.css';
import { CheckOutPageContext } from '../context';
import ProductComponent from '../../../components/productComponent';
import BackGround from '../../../components/backGround';

const CheckOutPageContent = () => {
  const { checkOutPageContextData } = useContext(CheckOutPageContext);
  const { checkoutUser, loading, totalPrice } = checkOutPageContextData;
  return (
    <IonPage>
      <Header linkTo={HOME_PAGE} />
      <IonContent>
        <BackGround>
          <div className="checkOutTitle">Checkout Products</div>
          {loading ? <IonSpinner />
            : checkoutUser.map((item) => (
              <IonItemSliding key={item.id}>
                <IonItem routerLink={`${CATEGORIES_PAGE}/${item.idCategory}/${item.id}`}>
                  <ProductComponent {...item} />
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption>
                    <IonIcon icon={trashOutline} />
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          <IonItem>
            <div className="checkOutTotalPrice">
              <span>
                Total prcie:
                {' '}
              </span>
              <IonIcon icon={logoUsd} className="checkOutIcon" />
              <div>{totalPrice}</div>
            </div>
          </IonItem>
        </BackGround>
      </IonContent>
    </IonPage>
  );
};

export default CheckOutPageContent;
