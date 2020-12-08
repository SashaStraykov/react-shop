import React, { useContext } from 'react';
import {
  IonTabs, IonTabBar, IonTabButton, IonIcon, IonBadge, IonRouterOutlet,
} from '@ionic/react';
import {
  home, person, cart, layers,
} from 'ionicons/icons';
import {
  HOME_PAGE, CHECKOUT_PAGE, PERSON_PAGE, ADMIN_PAGE,
} from '../../constants';
import LayOuts from '../../layouts';
import './tabs.css';
import { AppContext } from '../../app/context';

const Tabs = () => {
  const { appContextData } = useContext(AppContext);
  const { amountItemsinBucket, user } = appContextData;

  return (
    <IonTabs>
      <IonRouterOutlet>
        <LayOuts />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className="tabBackground">
        <IonTabButton tab="tab1" href={HOME_PAGE} className="iconTab">
          <IonIcon icon={home} />
        </IonTabButton>
        <IonTabButton tab="personpage" href={PERSON_PAGE} className="iconTab">
          <IonIcon icon={person} />
        </IonTabButton>
        <IonTabButton tab="checkoutpage" href={CHECKOUT_PAGE} className="iconTab">
          <IonIcon icon={cart} />
          {user && <IonBadge color="danger">{amountItemsinBucket}</IonBadge>}
        </IonTabButton>
        {user && user.role === 'admin' && (
        <IonTabButton tab="about" className="iconTab" href={ADMIN_PAGE}>
          <IonIcon icon={layers} />
        </IonTabButton>
        )}
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
