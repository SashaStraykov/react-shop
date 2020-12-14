import React, { useContext } from 'react';
import {
// IonItem,
} from '@ionic/react';
import { useRouteMatch } from 'react-router-dom';
import { HOME_PAGE } from '../../../constants';
import CategoryCompomnent from '../../../components/categoryComponent';
import { CategoriesPageContext } from '../context';
// import SearchPannel from '../../../components/searchPannel';
import Wrapper from '../../../components/wrapper';
import Spinner from '../../../components/spinner';
import './CategoriePageContent.css';

const CategoriesPageContent = () => {
  const { categoriesPageContextData } = useContext(CategoriesPageContext);
  const { loading, categories } = categoriesPageContextData;
  const { url } = useRouteMatch();
  return (
    <Wrapper link={HOME_PAGE}>
      {/* <IonItem>
        <SearchPannel />
      </IonItem> */}
      {loading ? <Spinner />
        : (
          <div className="column">
            {categories && categories.map((el) => <CategoryCompomnent key={el._id} url={`${url}/${el.title}`} {...el} />)}
          </div>
        )}
    </Wrapper>
  );
};

export default CategoriesPageContent;
