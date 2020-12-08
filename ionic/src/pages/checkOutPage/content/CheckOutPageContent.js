import {
  IonItemSliding,
  IonSpinner,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonAlert,
  IonToast,
} from '@ionic/react';
import {
  trashOutline,
  logoUsd,
} from 'ionicons/icons';
import React, { useContext } from 'react';
import { HOME_PAGE, CATEGORIES_PAGE } from '../../../constants';
import './CheckOutPageContent.css';
import { CheckOutPageContext } from '../context';
import ProductComponent from '../../../components/productComponent';
import Wrapper from '../../../components/wrapper';

const CheckOutPageContent = () => {
  const { checkOutPageContextData } = useContext(CheckOutPageContext);
  const {
    checkoutUser, loading, totalPrice, cancelItem,
    idDeleteAnnouncement, setIdDeleteAnnouncement,
    alertMessage, setAlertMessage, alert, setAlert,
    items, showToast, setShowToast, errorMessage,
  } = checkOutPageContextData;
  return (
    <Wrapper link={HOME_PAGE}>
      <div className="checkOutTitle">Checkout Products</div>
      {loading ? <IonSpinner />
        : checkoutUser.map((item) => (
          <IonItemSliding key={item.id}>
            <IonItem className="itemCss" routerLink={`${CATEGORIES_PAGE}/${item.idCategory}/${item.id}`}>
              <ProductComponent {...item} />
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="danger" onClick={() => { setIdDeleteAnnouncement(item.id); setAlert(true); setAlertMessage(item.title); }}>
                <IonIcon icon={trashOutline} className="checkOutIconD" />
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      <IonItem className="itemCss">
        <div className="checkOutTotalPrice">
          <span>
            Total prcie:
            {' '}
          </span>
          <IonIcon icon={logoUsd} className="checkOutIcon" />
          <div>{totalPrice}</div>
        </div>
      </IonItem>
      <IonAlert
        isOpen={alert}
        onDidDismiss={() => setAlert(false)}
        header="Do you really want remove from bucket"
        message={alertMessage}
        buttons={[{
          text: 'Yes',
          handler: () => {
            cancelItem(idDeleteAnnouncement, items);
          },
        }, 'CANCEL']}
      />
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={errorMessage}
        duration={2000}
        color="secondary"
        position="bottom"
      />
    </Wrapper>
  );
};

export default CheckOutPageContent;
