import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BackGroundGrey,
  H2,
  Container,
  TypsBox,
  TypsBoxLeft,
  TypsBoxRight,
  ItemBox,
  ButtonCancel,
  H2Title,
  FlexBox,
  FlexBoxItems,
  CommentBox,
} from './styled';
import ProductsCategoryItem from '../../../../Components/ProductsCategoryItem';
import Spinner from '../../../../Components/Spinner';
import { PersonPageContext } from '../../context';
import { PRODUCTS_CATEGORY_PAGE } from '../../../../constants/routes';

const PersonPageInfo = () => {
  const { contextdataPersonPage } = useContext(PersonPageContext);
  const {
    user, onDelete,
  } = contextdataPersonPage;
  const [loading, setLoading] = useState(false);
  const [madePosts, setMadeposts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const req = async () => {
      await fetch('http://localhost:3000/items')
        .then((response) => response.json())
        .then((data) => {
          const newItems = data.filter((el) => el.userId === user.id);
          setMadeposts(newItems);
          setLoading(false);
        });
    };
    req();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BackGroundGrey>
      <H2Title>
        Hello
        {' '}
        {user.login}
      </H2Title>
      <Container>
        <TypsBox>
          <TypsBoxLeft>
            You have
            {' '}
            {user.typs}
            {' '}
            typs
          </TypsBoxLeft>
          <TypsBoxRight>Buy more Typs</TypsBoxRight>
        </TypsBox>
      </Container>
      <Container>
        <H2>Your announcement</H2>
        <FlexBox>
          <FlexBoxItems>

            {loading ? (
              <Spinner />
            ) : (
              madePosts.map(({ id, ...el }) => (
                <ItemBox key={id}>
                  <Link to={`${PRODUCTS_CATEGORY_PAGE}/${el.idCategory}/${id}`}>
                    <ProductsCategoryItem {...el} id={id} />
                  </Link>
                  <ButtonCancel onClick={(e) => onDelete(e, id)}>x</ButtonCancel>
                </ItemBox>
              ))
            )}
          </FlexBoxItems>
          <CommentBox><h1>comment</h1></CommentBox>
        </FlexBox>

      </Container>
    </BackGroundGrey>
  );
};

export default PersonPageInfo;
