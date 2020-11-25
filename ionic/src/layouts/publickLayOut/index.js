import React from 'react'
import { Route } from 'react-router-dom';
import { HOME_PAGE, CATEGORIES_PAGE, AUTHENTIFICATION_PAGE } from '../../constants';
import HomePage from '../../pages/homePage';
import CategoriesPage from '../../pages/categoriesPage';
import ProductsPage from '../../pages/productsPage';
import ItemPage from '../../pages/itemPage';
import AuthenticationPage from '../../pages/authenticationPage';

const PublickLayOut = () => {
    return (
        <>
            <Route path = {HOME_PAGE} exact={true} >
                <HomePage/>
            </Route>
            <Route path = {`${CATEGORIES_PAGE}/:category`} exact={true}>
                <ProductsPage/>
            </Route>
            <Route path = {`${CATEGORIES_PAGE}/:category/:id`} exact={true}>
                <ItemPage/>
            </Route>
            <Route path = {CATEGORIES_PAGE}  exact={true}>
                <CategoriesPage/>
            </Route>
            <Route path = {AUTHENTIFICATION_PAGE}  exact={true}>
                <AuthenticationPage/>
            </Route>
        </>
    )
}

export default PublickLayOut;
