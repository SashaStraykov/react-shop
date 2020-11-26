import React from 'react';
import {
  IonTabs, IonTabBar, IonTabButton, IonIcon, IonBadge, IonRouterOutlet,
} from '@ionic/react';
import {
  informationCircle,
  home, person, cart,
} from 'ionicons/icons';

import {
  HOME_PAGE, CHECKOUT_PAGE, PERSON_PAGE,
} from '../../constants';
import LayOuts from '../../layouts';
import './tabs.css';

const Tabs = () => (
  <IonTabs>
    <IonRouterOutlet>
      <LayOuts />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href={HOME_PAGE} className="tabBackground">
        <IonIcon icon={home} />
      </IonTabButton>
      <IonTabButton tab="personpage" href={PERSON_PAGE} className="tabBackground">
        <IonIcon icon={person} />
      </IonTabButton>
      <IonTabButton tab="checkoutpage" href={CHECKOUT_PAGE} className="tabBackground">
        <IonIcon icon={cart} />
        <IonBadge color="danger">6</IonBadge>
      </IonTabButton>
      <IonTabButton tab="about" className="tabBackground">
        <IonIcon icon={informationCircle} />
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
