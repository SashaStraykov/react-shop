import React, { useContext } from 'react';
import { IonLabel, IonInput, IonItem } from '@ionic/react';
import { AppContext } from '../../app/context';
import './SearchPannel.css';

const SearchPannel = () => {
  const { appContextData } = useContext(AppContext);
  const {
    search, setSearch, reload, setReload,
  } = appContextData;
  return (
    <IonItem className="searchPannelForm">
      <form className="searchPannelForm" onSubmit={(e) => { e.preventDefault(); setReload(!reload); }}>
        <IonLabel className="searcPannelLabel" position="floating">Type for Search...</IonLabel>
        <IonInput className="searcPannelLabel" value={search} onIonChange={(e) => setSearch(e.target.value)} />
      </form>
    </IonItem>

  );
};

export default SearchPannel;
