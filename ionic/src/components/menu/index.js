import React, { useContext } from 'react';
import {
  IonMenu,
  IonList,
  IonItem,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuToggle,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import {
  home, person, cart, pricetag,
} from 'ionicons/icons';
import {
  HOME_PAGE, PERSON_PAGE, AUTHENTIFICATION_PAGE, CHECKOUT_PAGE,
} from '../../constants';
import { AppContext } from '../../app/context';
import './Menu.css';

const Menu = () => {
  const { appContextData } = useContext(AppContext);
  const { user, signOut } = appContextData;
  return (
    <>
      <IonMenu side="end" contentId="menu">
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="menuBorder">
          <IonList>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={HOME_PAGE}>
                <IonIcon color="secondary" slot="start" icon={home} />
                <IonLabel>
                  Home
                </IonLabel>
              </IonItem>
              {user
                            && (
                            <>
                              <IonItem button routerLink={PERSON_PAGE}>
                                <IonIcon color="secondary" slot="start" icon={person} />
                                <IonLabel>
                                  Person Page
                                </IonLabel>
                              </IonItem>
                              <IonItem button routerLink={`${PERSON_PAGE}${CHECKOUT_PAGE}`}>
                                <IonIcon color="secondary" slot="start" icon={cart} />
                                <IonLabel>
                                  Check out Page
                                </IonLabel>
                              </IonItem>
                            </>
                            )}
              <IonItem button onClick={signOut} routerLink={AUTHENTIFICATION_PAGE}>
                <IonIcon color="secondary" slot="start" icon={pricetag} />
                <IonLabel>
                  {user ? 'Sign Out' : 'Sign In'}
                </IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    </>

  );
};

export default Menu;
