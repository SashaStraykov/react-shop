import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';
import {
  Wrapper, FormBox, InputComment, CommentButton, Container, H2, AuthorizathionButton, ChatTable,
} from './styled';
import CommentComponent from '../CommentComponent';
import { AppContext } from '../../App/Context/Index';
import { AUTHORIZATION_PAGE } from '../../constants/routes';
import { ItemPageContext } from '../../Pages/ItemPage/Context';

const Chat = ({ item }) => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;

  const { contextDataItem } = useContext(ItemPageContext);
  const { comment, setComment, postComment } = contextDataItem;

  return (
    <Wrapper>
      <H2>Comments about this item</H2>
      <ChatTable>
        {item.comments.length === 0
          ? <H2>Still no comments</H2>
          : item.comments.map(({ id, ...rest }) => (
            <Container key={id}>
              <CommentComponent item={item.id} {...rest} id={id}/>
            </Container>
          ))}
      </ChatTable>
      {user ? (
        <FormBox onSubmit={postComment}>
          <InputComment value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Type..." />
          <CommentButton><SendIcon /></CommentButton>
        </FormBox>
      ) : (
        <Link to={AUTHORIZATION_PAGE}>
          <AuthorizathionButton>Authorize to remain your comment</AuthorizathionButton>
        </Link>
      ) }

    </Wrapper>
  );
};
export default Chat;

Chat.propTypes = {
  // eslint-disable-next-line react/require-default-props
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.array.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
