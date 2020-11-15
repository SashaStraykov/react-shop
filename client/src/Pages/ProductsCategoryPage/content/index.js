import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import CategoryComponent from '../../../Components/CategoryComponent';
import { ProductsCategoryPageContext } from '../context';
import Spinner from '../../../Components/Spinner';
import ErrorModal from '../../../Components/ErrorModal';
import {
  DivGrid,
  BackGroundGrey,
  Container,
  H2,
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
    <BackGroundGrey>
      <H2>Select Category</H2>
      <Container>
        <DivGrid>
          {category.map(({ idCategory, title, img }) => (
            <CategoryComponent
              key={idCategory}
              url={`${url}/${title}`}
              img={img}
              title={title}
            />
          ))}
        </DivGrid>
      </Container>
    </BackGroundGrey>
  );
};

export default ProductsCategoryPageContent;
