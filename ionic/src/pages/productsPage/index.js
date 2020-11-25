import React from 'react';
import ProductsPageContent from './content/ProductsPageContent';
import { ProductsPageContextProvider } from './context';
import { useParams } from 'react-router-dom';

const ItemPage = () => {
    const { category } = useParams();
    return (
        <ProductsPageContextProvider category={category}>
            <ProductsPageContent/>
        </ProductsPageContextProvider>
    )
}

export default ItemPage
