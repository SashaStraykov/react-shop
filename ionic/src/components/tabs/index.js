import React, { useContext } from 'react';
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
import { AppContext } from '../../app/context';

const Tabs = () => {
  const { appContextData } = useContext(AppContext);
  const { ammountItemsinBucket, user } = appContextData;

  return (
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
          {user && <IonBadge color="danger">{ammountItemsinBucket}</IonBadge>}
        </IonTabButton>
        <IonTabButton tab="about" className="tabBackground">
          <IonIcon icon={informationCircle} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
