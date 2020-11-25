import React, { useContext } from 'react';
import { IonSpinner, IonContent, IonItem, IonPage, IonInfiniteScrollContent, IonInfiniteScroll, IonLabel, IonInput } from '@ionic/react';
import { CATEGORIES_PAGE } from '../../../constants';
import Header from '../../../layouts/header';
import ProductComponent from '../../../components/productComponent';
import { ProductsPageContext } from '../context';
import SearchPannel from '../../../components/searchPannel';
import './productsPageContent.css';

const HomePageContent = () => {
    const { productsPageContextData } = useContext(ProductsPageContext);
    const { category, loading, products, nextItems, disableInfiniteScroll, search, setSearch } = productsPageContextData;
    return (
        <IonPage>
            <Header linkTo={CATEGORIES_PAGE}/>
            <IonContent>
                <IonItem>
                    <SearchPannel />
                </IonItem>
                {loading? 
                <IonSpinner name="dots" 
                color="secondary" 
                className="spinnerItem"/> :
                products.map(({id, ...rest}) => {
                    return (
                        <IonItem key={id} 
                        routerLink={`${CATEGORIES_PAGE}/${category}/${id}`} 
                        routerDirection="forward">
                            <ProductComponent  {...rest} id={id}/>
                        </IonItem>)
                })}
                <IonInfiniteScroll threshold="50px"
                disabled={disableInfiniteScroll}
                onIonInfinite={(e) => nextItems(e)}
                >
                    <IonInfiniteScrollContent
                    loadingText="Loading more good doggos...">
                    </IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    )
}

export default HomePageContent
