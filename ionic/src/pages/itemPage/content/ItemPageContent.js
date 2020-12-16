import React, { useContext } from 'react';
import {
  IonButton, IonIcon, IonItem, IonToast,
} from '@ionic/react';
import { logoUsd } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { CATEGORIES_PAGE, AUTHENTIFICATION_PAGE } from '../../../constants';
import { ItemPageContext } from '../context';
import './ItemPageContent.css';
import Slider from '../../../components/slider';
import Wrapper from '../../../components/wrapper';
import Spinner from '../../../components/spinner';
import CommentBox from '../../../components/commentBox';
import ErrorPage from '../../../components/error';

const ItemPageContent = () => {
  const { itemPageContextData } = useContext(ItemPageContext);
  const {
    category, loading, item, addItemToBucket, added,
    user, commentValue, setCommentValue, postComment,
    deleteComment, showToast, errorMessage, setShowToast,
    error,
  } = itemPageContextData;
  const {
    title, img, description, id, comments, price,
  } = item;
  if (error) {
    return <ErrorPage />;
  }
  return (
    <Wrapper link={`${CATEGORIES_PAGE}/${category}`}>
      {loading ? <Spinner /> : (
        <div className="itemPageBox">
          <div className="itemPageTitle">{title}</div>
          <div>
            {img && <Slider img={img} />}
          </div>
          <div className="itemPageDescription">{description}</div>
          <IonItem className="itemCss">
            <div className="checkOutTotalPrice">
              <span>
                Prcie:
                {' '}
              </span>
              <IonIcon icon={logoUsd} className="checkOutIcon" />
              <div>{price}</div>
            </div>
          </IonItem>
          {user
            ? <IonButton onClick={() => addItemToBucket(id)} className="itemPageBucketButton" color="secondary" fill="outline">{added ? 'Already in the bucket' : 'Add to bucket'}</IonButton>
            : (
              <Link to={AUTHENTIFICATION_PAGE} className="itemPageLink">
                <IonButton className="itemPageBucketButtonAuth" color="danger" fill="outline">Authorize to add</IonButton>
              </Link>
            )}

        </div>
      ) }
      <CommentBox
        comments={comments}
        commentValue={commentValue}
        setCommentValue={setCommentValue}
        postComment={postComment}
        deleteComment={deleteComment}
        id={id}
      />
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={errorMessage}
        duration={2000}
        color="secondary"
        position="top"
      />
    </Wrapper>
  );
};

export default ItemPageContent;
