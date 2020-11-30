import React, { useContext } from 'react';
import {
  IonSpinner,
  IonContent,
  IonItem,
  IonPage,
  IonInfiniteScrollContent,
  IonInfiniteScroll,
} from '@ionic/react';
import { useRouteMatch } from 'react-router-dom';
import { CATEGORIES_PAGE } from '../../../constants';
import Header from '../../../layouts/header';
import ProductComponent from '../../../components/productComponent';
import { ProductsPageContext } from '../context';
import SearchPannel from '../../../components/searchPannel';
import './productsPageContent.css';

const HomePageContent = () => {
  const { url } = useRouteMatch();
  console.log('url-', url);
  const { productsPageContextData } = useContext(ProductsPageContext);
  const {
    category, loading, products, nextItems, disableInfiniteScroll,
  } = productsPageContextData;
  return (
    <IonPage>
      <Header linkTo={CATEGORIES_PAGE} />
      <IonContent>
        <IonItem>
          <SearchPannel />
        </IonItem>
        {loading
          ? (
            <IonSpinner
              name="dots"
              color="secondary"
              className="spinnerItem"
            />
          )
          : products.map(({ id, ...rest }) => (
            <IonItem
              key={id}
              routerLink={`${CATEGORIES_PAGE}/${category}/${id}`}
              routerDirection="forward"
            >
              <ProductComponent {...rest} id={id} />
            </IonItem>
          ))}
        <IonInfiniteScroll
          threshold="50px"
          disabled={disableInfiniteScroll}
          onIonInfinite={(e) => nextItems(e)}
        >
          <IonInfiniteScrollContent
            loadingText="Loading more good doggos..."
          />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default HomePageContent;
