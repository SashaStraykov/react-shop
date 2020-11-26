import React from 'react';
import { Route } from 'react-router-dom';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
import { HOME_PAGE, CHECKOUT_PAGE, PERSON_PAGE } from '../../constants';
import HomePage from '../../pages/homePage';
import PersonPage from '../../pages/personPage';

const Tabs = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/person-page-info">
<h1>Person-pageInfo</h1>
                </Route>
            </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="schedule" href={HOME_PAGE}>
            <IonIcon icon={calendar} />
            <IonLabel>Schedule</IonLabel>
            <IonBadge>6</IonBadge>
          </IonTabButton>
    
          <IonTabButton tab="speakers"  href="/person-page-info">
            <IonIcon icon={personCircle} />
            <IonLabel>Speakers</IonLabel>
          </IonTabButton>
    
          <IonTabButton tab="map">
            <IonIcon icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
    
          <IonTabButton tab="about">
            <IonIcon icon={informationCircle} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    )
}

export default Tabs;
