import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ItemPage from '../../Pages/ItemPage';
import ProductsCategoryPage from '../../Pages/ProductsCategoryPage';
import ProductsCategoryItemsPage from '../../Pages/ProductsCategoryItemsPage';

const ProductsLayout = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${path}`} exact>
          <ProductsCategoryPage />
        </Route>
        <Route path={`${path}/:category/:itemid`}>
          <ItemPage />
        </Route>
        <Route path={`${path}/:category`}>
          <ProductsCategoryItemsPage />
        </Route>
      </Switch>
    </>
  );
};

export default ProductsLayout;
