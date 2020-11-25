import React from 'react';
import ItemPageContent from './content/ItemPageContent';
import { ItemPageContextProvider } from './context';
import { useParams } from 'react-router-dom';

const ItemPage = () => {
    const { category, id } = useParams();
    return (
        <ItemPageContextProvider category={category} itemId={id}>
            <ItemPageContent/>
        </ItemPageContextProvider>
    )
}

export default ItemPage
