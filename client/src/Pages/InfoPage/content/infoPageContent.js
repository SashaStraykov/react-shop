import React, { useContext} from 'react';
import {
  BackGroundGrey,
  H2,
  ItemBox,
  ButtonCancel, 
  FlexBox,
  FlexBoxItems,   
  CommentBox,
  SettingsBox,
  LinkTo,
  BoxContainer,
  TopContainer,
  TopContainerItem,
  TopContainerItemEnd,
  ItemDigit,
  ButtonL,
  NoComments,
  FormBox,
  InputComment, 
  CommentButton,
  ChatBox,
  CommentWrapper,


} from './styled';
import ProductsCategoryItem from '../../../Components/ProductsCategoryItem';
import Spinner from '../../../Components/Spinner';
import { InfoPageContext} from '../context';
import { PRODUCTS_CATEGORY_PAGE, ADD_ANNOUNCMENT_PAGE, PERSON_PAGE } from '../../../constants/routes';
import ErrorModal from '../../../Components/ErrorModal';
import CommentComponent from '../../../Components/CommentComponent'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import ConfirmComponent from '../../../Components/ConfirmComponent';
import Toast from '../../../Components/Toast';
import {AppContext} from '../../../App/Context/Index';
import { FiFilePlus } from "react-icons/fi";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  icon: {
    fontSize: '2em',
    color:'var(--nav-color)',
  },
  iconLink: {
    root:{
      contained:{
        background: 'var(--brand-color)',
      }

    }

  }
});


const InfoPageContent = () => {
  const { infoContextData } = useContext(InfoPageContext);
  const {
    user,  myItems, loading, error, confirmComponent,
    addConfirmComponent, confirmInfo, getComments, itemComments,
    postComment, comment, setComment
  } = infoContextData;
  const { contextData } = useContext(AppContext);
  const { openToast, errorMessage} = contextData;

const classes = useStyles();

  if(loading) {
    return <Spinner/> 
  }
  if(error) {
    return <ErrorModal/>
  }
  return (
    <BackGroundGrey>
      {openToast && <Toast message={errorMessage}/>}
      {confirmComponent && <ConfirmComponent {...confirmInfo} />}
      <TopContainer>
        <TopContainerItem>
          Hello
          <br/>
          {user.login}
        </TopContainerItem>
        <TopContainerItem>
          <ItemDigit>
          {user.typs}
          </ItemDigit>
          TYPS
        </TopContainerItem>
        <TopContainerItem>
          <ItemDigit>
          {myItems.length}
          </ItemDigit>
          ITEMS
        </TopContainerItem>
        <TopContainerItemEnd >
          <ButtonL to ={`${PERSON_PAGE}${ADD_ANNOUNCMENT_PAGE}`}>
            <Button
              className={classes.iconLink}
              variant="contained"
              endIcon={<FiFilePlus/>}>
                New announcement
            </Button>
          </ButtonL>
        </TopContainerItemEnd>
      </TopContainer>
      <H2>Your announcement  <span>&#8595;</span></H2>
      <BoxContainer>
        <FlexBox>
          <FlexBoxItems>
            {loading ? (
              <Spinner />
            ) : (
              myItems.map(({ id, comments, ...el }) => (
                <ItemBox key={id}>
                  <div onClick={()=>getComments(comments, id)}>
                  <ProductsCategoryItem {...el} comments={comments} id={id}  />
                  </div>
                  <SettingsBox>
                    <ButtonCancel onClick={()=>addConfirmComponent(id, el.title)}>
                      <DeleteForeverIcon className={classes.icon}/>
                    </ButtonCancel>
                    <LinkTo to={`${PRODUCTS_CATEGORY_PAGE}/${el.idCategory}/${id}`}>
                      <VisibilityIcon className={classes.icon}/>
                    </LinkTo>
                  </SettingsBox>
                </ItemBox>
              ))
            )}
          </FlexBoxItems>
          <ChatBox>
            <CommentBox>
              {itemComments.comments.length===0? <NoComments>No Comments</NoComments>: null}
              {itemComments && itemComments.comments.map(({id, ...rest})=> {
                  return <CommentWrapper key={id}><CommentComponent item={itemComments.itemId}  id={id} {...rest}/></CommentWrapper>
            })}
            </CommentBox>
            {itemComments.itemId && <FormBox onSubmit={(e)=>postComment(e)}>
              <InputComment  value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Type..." />
                <CommentButton>
                  <SendIcon/>
                </CommentButton>
            </FormBox> }
          </ChatBox>
        </FlexBox>
      </BoxContainer>

    </BackGroundGrey>
  );
};

export default InfoPageContent;
