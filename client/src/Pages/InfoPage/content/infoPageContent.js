import React, { useContext, useState} from 'react';
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
  SettingsBox,
  LinkTo

} from './styled';
import ProductsCategoryItem from '../../../Components/ProductsCategoryItem';
import Spinner from '../../../Components/Spinner';
import { InfoPageContext} from '../context';
import { PRODUCTS_CATEGORY_PAGE } from '../../../constants/routes';
import ErrorModal from '../../../Components/ErrorModal'


const InfoPageContent = () => {
  const { infoContextData } = useContext(InfoPageContext);
  const {
    user, onDelete, myItems, loading, error
  } = infoContextData;
const [itemComments, setItemComments] = useState([])
const getComments = (comments) => {
setItemComments(comments)
console.log(comments)
}
  if(loading) {
    return <Spinner/>
  }
  if(error) {
    return <ErrorModal/>
  }
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
              myItems.map(({ id, comments, ...el }) => (
                <ItemBox key={id}>
                  <div onClick={()=>getComments(comments)}>
                  <ProductsCategoryItem {...el} comments={comments} id={id}  />
                  </div>
                  <SettingsBox>
                  <ButtonCancel onClick={(e) => onDelete(e, id)}>DELETE</ButtonCancel>
                    <LinkTo to={`${PRODUCTS_CATEGORY_PAGE}/${el.idCategory}/${id}`}>
                      Link to
                    </LinkTo>
                  </SettingsBox>
                </ItemBox>
              ))
            )}
          </FlexBoxItems>
              <CommentBox>
                {itemComments && itemComments.map(comment=> {
                    return<span key={comment.id}>{comment.comment}</span>
              })}
              </CommentBox>
        </FlexBox>

      </Container>
    </BackGroundGrey>
  );
};

export default InfoPageContent;
