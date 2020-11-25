import React, { useContext } from 'react';
import { IonLabel, IonInput } from '@ionic/react';
import { AppContext } from '../../app/context';

const SearchPannel = () => {
    const { appContextData } = useContext(AppContext);
    const { search, setSearch, reload, setReload } = appContextData;
    return (
        <form onSubmit={(e)=>{e.preventDefault();setReload(!reload)}}>
            <IonLabel  position="floating">Type for Search...</IonLabel>
            <IonInput value={search} onIonChange={(e)=>setSearch(e.target.value)}/>
        </form>
    )
}

export default SearchPannel
