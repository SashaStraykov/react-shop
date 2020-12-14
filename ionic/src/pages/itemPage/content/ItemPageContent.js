import React, { useContext } from 'react';
import { IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import { CATEGORIES_PAGE, AUTHENTIFICATION_PAGE } from '../../../constants';
import { ItemPageContext } from '../context';
import './itemPageContent.css';
import Slider from '../../../components/slider';
import Wrapper from '../../../components/wrapper';
import Spinner from '../../../components/spinner';

const ItemPageContent = () => {
  const { itemPageContextData } = useContext(ItemPageContext);
  const {
    category, loading, item, addItemToBucket, added,
    user,
  } = itemPageContextData;
  const {
    title, img, description, id,
  } = item;
  console.log(loading);
  // price, date,
  return (
    <Wrapper link={`${CATEGORIES_PAGE}/${category}`}>
      {loading ? <Spinner /> : (
        <div className="itemPageBox">
          <div className="itemPageTitle">{title}</div>
          <div>
            {img && <Slider img={img} />}
          </div>
          <div className="itemPageDescription">{description}</div>
          {user
            ? <IonButton onClick={() => addItemToBucket(id)} className="itemPageBucketButton" color="secondary" expand="full" fill="outline">{added ? 'Already in the bucket' : 'Add to bucket'}</IonButton>
            : (
              <Link to={AUTHENTIFICATION_PAGE} className="itemPageLink">
                <IonButton className="itemPageBucketButtonAuth" color="danger" fill="outline">Authorize to add</IonButton>
              </Link>
            )}

        </div>
      ) }
    </Wrapper>
  );
};

export default ItemPageContent;
