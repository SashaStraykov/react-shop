import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import CategoryComponent from '../../../Components/CategoryComponent';
import { ProductsCategoryPageContext } from '../context';
import Spinner from '../../../Components/Spinner';
import ErrorModal from '../../../Components/ErrorModal';
import {
  DivGrid, BackGroundGrey, Container, H2,
} from './styled';

const ProductsCategoryPageContent = () => {
  const { url } = useRouteMatch();
  const { productsCategoryPageContextData } = useContext(
    ProductsCategoryPageContext,
  );
  const { category, loading, error } = productsCategoryPageContextData;

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorModal />;
  }
  return (
    <>
      <BackGroundGrey>
        <H2>Choice Product Category</H2>
        <Container>
          <DivGrid>
            {category.map(({ idCategory, title, img }) => (
              <Link key={idCategory} to={`${url}/${title}`}>
                <CategoryComponent img={img} title={title} />
              </Link>
            ))}
          </DivGrid>
        </Container>
      </BackGroundGrey>

    </>
  );
};

export default ProductsCategoryPageContent;
