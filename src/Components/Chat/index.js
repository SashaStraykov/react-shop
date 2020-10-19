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

const Chat = ({ item }) => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;

  return (
    <Wrapper>
      <H2>Comments about this item</H2>
      <ChatTable>
        {item[0].comments.length === 0
          ? <H2>Still no comments</H2>
          : item[0].comments.map(({ id, ...rest }) => (
            <Container key={id}>
              <CommentComponent {...rest} />
            </Container>
          ))}
      </ChatTable>
      {user ? (
        <FormBox>
          <InputComment placeholder="Type..." />
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
  item: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
