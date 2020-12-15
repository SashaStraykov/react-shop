import {
  IonButton,
  IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonTextarea,
  IonIcon,
} from '@ionic/react';
import { cameraOutline } from 'ionicons/icons';
import React, { useContext } from 'react';
import { AddProductPageContext } from '../context';
import './AddProductPage.css';
import Spinner from '../../../components/spinner';

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
    postData,
    setPhotos,
    photos,
  } = addProductPageContextData;
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="addTitle">Add new anouncement</div>
      <IonItem className="itemCss">
        <IonLabel position="floating">Title</IonLabel>
        <IonInput value={title} onIonChange={(e) => setTitle(e.detail.value)} />
      </IonItem>
      <IonItem className="itemCss">
        <IonLabel>Category</IonLabel>
        <IonSelect value={selectCategory} onIonChange={(e) => setSelectCategory(e.detail.value)}>
          {category.map((el) => (
            <IonSelectOption
              value={el.title}
              key={el._id}
            >
              {el.title}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonItem className="itemCss">
        <IonLabel position="floating">Price</IonLabel>
        <IonInput value={price} onIonChange={(e) => setPrice(e.detail.value)} type="number" />
      </IonItem>
      <IonItem className="itemCss">
        <IonLabel position="floating">Description</IonLabel>
        <IonTextarea rows="6" value={description} onIonChange={(e) => setDescription(e.detail.value)} />
      </IonItem>
      <div className="inputWrapper">
        <input
          name="file"
          type="file"
          id="inputFile"
          className="inputFile"
          onChange={(e) => setPhotos(e.target.files)}
          multiple
        />
        <label htmlFor="inputFile" className="inputFileButton">
          <span className="inputFileIconWrapper">
            <IonIcon className="inputIcon" icon={cameraOutline} />
          </span>
          <span className="inputFileButtonText">Select photos</span>
        </label>
      </div>
      <div className="addSelectedFiles">
        Selected
        {' '}
        {photos.length}
        {' '}
        photos
      </div>
      <IonButton className="addItemButton" color="secondary" expand="block" fill="outline" onClick={postData}>Send</IonButton>

    </>
  );
};

export default AddProductPageContent;
