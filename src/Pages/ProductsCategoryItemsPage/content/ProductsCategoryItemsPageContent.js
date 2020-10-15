import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import ProductsCategoryItem from '../../../Components/ProducsCategoryItem/ProducsCategoryItem';
import Pagination from '../../../Components/Pagination/Pagination';
import {
  BackGroundGrey,
  Container,
  H2,
  ContainerItem,
  SearchPannel,
} from './Styled';
import { ProductsCategoryItemsPageContext } from '../Context/Index';
import Spinner from '../../../Components/Spinner/Spinner';
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
    <div>
      <BackGroundGrey>
        <H2>
          Welcome to the
          {category.toUpperCase()}
          {' '}
          category
        </H2>

        <SearchPannel
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Container>
          {finalItems.map((item) => (
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
    </div>
  );
}

export default ProductsCategoryItemsPageContent;
