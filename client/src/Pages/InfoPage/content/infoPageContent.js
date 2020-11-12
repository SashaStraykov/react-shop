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
import ErrorModal from '../../../Components/ErrorModal';
import CommentComponent from '../../../Components/CommentComponent'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    fontSize: '2em',
  },
});


const InfoPageContent = () => {
  const { infoContextData } = useContext(InfoPageContext);
  const {
    user, onDelete, myItems, loading, error
  } = infoContextData;
const [itemComments, setItemComments] = useState([])
const getComments = (comments) => {
setItemComments(comments)
}
const classes = useStyles();
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
        <H2>Your announcement</H2>
      <Container>


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
                    <ButtonCancel onClick={(e) => onDelete(e, id)}>
                      <DeleteForeverIcon className={classes.icon}/>
                    </ButtonCancel>
                    <LinkTo to={`${PRODUCTS_CATEGORY_PAGE}/${el.idCategory}/${id}`}>
                      <KeyboardArrowRightIcon className={classes.icon}/>
                    </LinkTo>
                  </SettingsBox>
                </ItemBox>
              ))
            )}
          </FlexBoxItems>
              <CommentBox>
                {itemComments && itemComments.map(({id, ...rest})=> {
                    return <div key={id}><CommentComponent {...rest}/></div>
              })}
              </CommentBox>
        </FlexBox>
        </Container>

    </BackGroundGrey>
  );
};

export default InfoPageContent;
