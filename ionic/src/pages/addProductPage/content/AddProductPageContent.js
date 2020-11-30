import {
  IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonSpinner, IonTextarea,
} from '@ionic/react';
import React, { useContext } from 'react';
import { AddProductPageContext } from '../context';
import './AddProductPage.css';

const AddProductPageContent = () => {
  const { addProductPageContextData } = useContext(AddProductPageContext);
  const {
    loading,
    title,
    setTitle,
    category,
    selectCategory,
    setSelectCategory,
    price,
    setPrice,
    description,
    setDescription,
  } = addProductPageContextData;
  if (loading) {
    return <IonSpinner />;
  }
  return (
    <div>
      <IonItem>
        <IonLabel position="floating">Title</IonLabel>
        <IonInput value={title} onIonChange={(e) => setTitle(e.detail.value)} />
      </IonItem>
      <IonItem>
        <IonLabel>Category</IonLabel>
        <IonSelect value={selectCategory} onIonChange={(e) => setSelectCategory(e.detail.value)}>
          {category.map((el) => <IonSelectOption value={el.title} key={el._id}>{el.title}</IonSelectOption>)}
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Price</IonLabel>
        <IonInput value={price} onIonChange={(e) => setPrice(e.detail.value)} type="number" />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Description</IonLabel>
        <IonTextarea rows="6" value={description} onIonChange={(e) => setDescription(e.detail.value)} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Photos</IonLabel>
        <IonInput type="file" />
      </IonItem>
    </div>
  );
};

export default AddProductPageContent;
