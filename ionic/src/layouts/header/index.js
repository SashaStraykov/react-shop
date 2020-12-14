import React, { useContext, useState } from 'react';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonAlert,
} from '@ionic/react';
import { exitOutline, chevronBack } from 'ionicons/icons';
import PropTypes from 'prop-types';
import Logo from '../../assets/dataArtLogo.png';
import './header.css';
import { AppContext } from '../../app/context';

const Header = ({ linkTo }) => {
  const { appContextData } = useContext(AppContext);
  const { user, setUser } = appContextData;
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <IonHeader className="clearFix">
        <IonToolbar className="header">
          <IonButtons slot="start" className="backButton">
            <IonBackButton text="" icon={chevronBack} color="secondary" defaultHref={linkTo} />
          </IonButtons>
          {user
                && (
                <IonButtons slot="end" className="exitButton">
                  <IonButton onClick={() => setShowAlert(true)}>
                    <IonIcon color="secondary" slot="icon-only" icon={exitOutline} />
                  </IonButton>
                </IonButtons>
                )}

          <IonTitle>
            <div className="logo">
              <img src={Logo} alt={Logo} />
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      {user
            && (
            <IonAlert
              isOpen={showAlert}
              onDidDismiss={() => setShowAlert(false)}
              header="Do really want to exit?"
              subHeader={user.login}
              buttons={[
                {
                  text: 'Yes',
                  cssClass: 'secondary',
                  handler: () => {
                    setUser(null);
                  },
                },
                {
                  text: 'Cancel',
                },
              ]}
            />
            )}

    </>
  );
};

export default Header;

Header.propTypes = {
  linkTo: PropTypes.string.isRequired,
};
