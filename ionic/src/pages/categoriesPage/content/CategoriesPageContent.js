import React, {useContext} from 'react';
import { HOME_PAGE } from '../../../constants';
import {  IonContent,  IonItem,  IonPage, IonSpinner } from '@ionic/react';
import Header from '../../../layouts/header';
import CategoryCompomnent from '../../../components/categoryComponent';
import { useRouteMatch } from 'react-router-dom';
import { CategoriesPageContext } from '../context';
import BackGround from '../../../components/backGround';
import SearchPannel from '../../../components/searchPannel';
import './CategoriePageContent.css';

const CategoriesPageContent = () => {
    const { categoriesPageContextData } = useContext(CategoriesPageContext);
    const { loading, categories } = categoriesPageContextData;
    const { url } = useRouteMatch();
    return (
        <IonPage>
            <Header linkTo={HOME_PAGE}/>
            <IonContent fullscreen>
                <IonItem>
                    <SearchPannel/>
                </IonItem>
            <BackGround>
                {loading? <IonSpinner name="dots" color="secondary" className="spinnerItem"/> :
                    <div className="column">
                        {categories && categories.map(el=> {
                            return  <CategoryCompomnent key={el._id} url={`${url}/${el.title}`} {...el}/>
                        })}
                    </div>
                }
                </BackGround>
            </IonContent>
        </IonPage>
    )
}

export default CategoriesPageContent
