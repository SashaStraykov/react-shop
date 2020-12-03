import React, { useContext } from 'react';
import {
  IonSpinner, IonButton,
} from '@ionic/react';
import { CATEGORIES_PAGE } from '../../../constants';
import { ItemPageContext } from '../context';
import './itemPageContent.css';
import Slider from '../../../components/slider';
import Wrapper from '../../../components/wrapper';

const ItemPageContent = () => {
  const { itemPageContextData } = useContext(ItemPageContext);
  const {
    category, loading, item, addItemToBucket, added,
  } = itemPageContextData;
  const {
    title, img, price, date, description, id,
  } = item;
  return (
    <Wrapper link={`${CATEGORIES_PAGE}/${category}`}>
      {loading ? <IonSpinner /> : (
        <div className="itemPageBox">
          <div className="itemPageTitle">{title}</div>
          <div>
            {img && <Slider img={img} />}
          </div>
          <div className="itemPageDescription">{description}</div>
          <IonButton onClick={() => addItemToBucket(id)} className="itemPageBucketButton" color="secondary" expand="full" fill="outline">{added ? 'Already in the bucket' : 'Add to bucket'}</IonButton>
        </div>
      ) }
    </Wrapper>
  );
};

export default ItemPageContent;
