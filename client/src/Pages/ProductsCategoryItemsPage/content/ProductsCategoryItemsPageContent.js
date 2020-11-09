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
  FlexSearch,
  SearchButton
} from './styled';
import { ProductsCategoryItemsPageContext } from '../Context/Index';
import Spinner from '../../../Components/Spinner';
import ErrorModal from '../../../Components/ErrorModal';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    fontSize: '2em',
  },
});

const ProductsCategoryItemsPageContent = () => {
  const { url } = useRouteMatch();
  const { ProductsCategoryItemsPageContextData } = useContext(
    ProductsCategoryItemsPageContext,
  );
  const classes = useStyles();

  const {
    currentPage,
    postsPerPage,
    totalPosts,
    paginate,
    category,
    loading,
    search,
    setSearch,
    posts,
    error,
    cart,
    setCart
  } = ProductsCategoryItemsPageContextData;
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorModal />;
  }
  return (
      <BackGroundGrey>
        <H2>
          Welcome to the
          {' '}
          {category.toUpperCase()}
          {' '}
          category
        </H2>
        <FlexSearch onSubmit={(e)=> { e.preventDefault();setCart(cart+1)}}>
          <SearchPannel
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
          <SearchButton>
          <SearchIcon className={classes.icon} />
          </SearchButton>

        </FlexSearch>

        <Container>
          {posts.length === 0 ? <H2>No matches</H2> : posts.map((item) => (
            <Link key={item.id} to={`${url}/${item.id}`}>
              <ContainerItem>
                <ProductsCategoryItem {...item} />
              </ContainerItem>
            </Link>
          ))}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={totalPosts}
            paginate={paginate}
            category={category}
            currentPage={currentPage}
          />
        </Container>
      </BackGroundGrey>
  );
}

export default ProductsCategoryItemsPageContent;
