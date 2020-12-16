import React, { useContext } from 'react';
import {
  IonItem,
  IonInfiniteScrollContent,
  IonInfiniteScroll,
} from '@ionic/react';
import { CATEGORIES_PAGE } from '../../../constants';
import ProductComponent from '../../../components/productComponent';
import { ProductsPageContext } from '../context';
import SearchPannel from '../../../components/searchPannel';
import Wrapper from '../../../components/wrapper';
import Spinner from '../../../components/spinner';
import './productsPageContent.css';
import ErrorPage from '../../../components/error';

const HomePageContent = () => {
  const { productsPageContextData } = useContext(ProductsPageContext);
  const {
    category, loading, products, nextItems, disableInfiniteScroll,
    error,
  } = productsPageContextData;
  if (error) {
    return <ErrorPage />;
  }
  return (
    <Wrapper link={CATEGORIES_PAGE}>
      <SearchPannel />
      {loading
        ? (
          <Spinner />
        )
        : products.map(({ id, ...rest }) => (
          <IonItem
            key={id}
            routerLink={`${CATEGORIES_PAGE}/${category}/${id}`}
            routerDirection="forward"
            className="productItem"
          >
            <ProductComponent {...rest} id={id} />
          </IonItem>
        ))}
      {products && products.length === 0 && <div className="productNoMatches">No matches</div>}
      <IonInfiniteScroll
        threshold="50px"
        disabled={disableInfiniteScroll}
        onIonInfinite={(e) => nextItems(e)}
      >
        <IonInfiniteScrollContent
          loadingText="Loading more products..."
        />
      </IonInfiniteScroll>
    </Wrapper>
  );
};

export default HomePageContent;
