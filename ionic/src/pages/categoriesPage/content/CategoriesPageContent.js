import React, { useContext } from 'react';
import {
} from '@ionic/react';
import { useRouteMatch } from 'react-router-dom';
import { HOME_PAGE } from '../../../constants';
import CategoryCompomnent from '../../../components/categoryComponent';
import { CategoriesPageContext } from '../context';
import Wrapper from '../../../components/wrapper';
import Spinner from '../../../components/spinner';
import './CategoriePageContent.css';
import ErrorPage from '../../../components/error';

const CategoriesPageContent = () => {
  const { categoriesPageContextData } = useContext(CategoriesPageContext);
  const { loading, categories, error } = categoriesPageContextData;
  const { url } = useRouteMatch();
  if (error) {
    return <ErrorPage />;
  }
  return (
    <Wrapper link={HOME_PAGE}>
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
