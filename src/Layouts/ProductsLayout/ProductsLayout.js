import React from "react";
import { Route, Switch } from "react-router-dom";
import ItemPage from "../../Pages/ItemPage/ItemPage";
import ProductsCategoryPage from "../../Pages/ProductsCategoryPage";
import ProductsCategoryItemsPage from "../../Pages/ProductsCategoryItemsPage";

const ProductsLayout = () => {
  return (
    <>
      <Switch>
        <Route path="/Products-Category-Page" exact>
          <ProductsCategoryPage />
        </Route>
        <Route
          path="/Products-Category-Page/:category/:itemid"
          render={({ match }) => {
            const { itemid } = match.params;
            return <ItemPage itemid={itemid} />;
          }}
        ></Route>
        <Route
          path="/Products-Category-Page/:category"
          render={({ match }) => {
            const { category } = match.params;
            console.log(category);
            return <ProductsCategoryItemsPage category={category} />;
          }}
        ></Route>
      </Switch>
    </>
  );
};

export default ProductsLayout;
