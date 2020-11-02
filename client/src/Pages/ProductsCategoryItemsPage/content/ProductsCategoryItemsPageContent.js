import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import ProductsCategoryItem from '../../../Components/ProductsCategoryItem';
import Pagination from '../../../Components/Pagination';
import {
  BackGroundGrey,
  Container,
  H2,
  ContainerItem,
  SearchPannel,
} from './styled';
import { ProductsCategoryItemsPageContext } from '../Context/Index';
import Spinner from '../../../Components/Spinner';
import ErrorModal from '../../../Components/ErrorModal';

function ProductsCategoryItemsPageContent() {
  const { url } = useRouteMatch();
  const { ProductsCategoryItemsPageContextData } = useContext(
    ProductsCategoryItemsPageContext,
  );

  const {
    currentPage,
    postsPerPage,
    posts,
    paginate,
    category,
    loading,
    search,
    setSearch,
    finalItems,
    error,
  } = ProductsCategoryItemsPageContextData;

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorModal />;
  }
  return (
    <>
      <BackGroundGrey>
        <H2>
          Welcome to the
          {' '}
          {category.toUpperCase()}
          {' '}
          category
        </H2>

        <SearchPannel
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Container>
          {finalItems.length === 0 ? <H2>No matches</H2> : finalItems.map((item) => (
            <Link key={item.id} to={`${url}/${item.id}`}>
              <ContainerItem>
                <ProductsCategoryItem {...item} />
              </ContainerItem>
            </Link>
          ))}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            category={category}
            currentPage={currentPage}
          />
        </Container>
      </BackGroundGrey>
    </>
  );
}

export default ProductsCategoryItemsPageContent;