import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  ChatBox, PersonAvatar, AvatarBox, AvatarName, CommentBox, CommentTimeStamp, Comment, DeleteButton
} from './styled';
import a1 from '../../assets/PersonIcons/boy-1.png';
import a2 from '../../assets/PersonIcons/boy.png';
import a3 from '../../assets/PersonIcons/girl-1.png';
import a4 from '../../assets/PersonIcons/girl.png';
import a5 from '../../assets/PersonIcons/man-1.png';
import a6 from '../../assets/PersonIcons/man-2.png';
import a7 from '../../assets/PersonIcons/man-3.png';
import a8 from '../../assets/PersonIcons/man-4.png';
import a9 from '../../assets/PersonIcons/man.png';
import { AppContext } from '../../App/Context/Index'
import { FiX } from "react-icons/fi";

const CommentComponent = ({ login, comment, timeStamp, id, item }) => {
  const avatars = [a1, a2, a3, a4, a5, a6, a7, a8, a9];
  const randomAvatar = useMemo(() => Math.floor(Math.random() * Math.floor(avatars.length)), [avatars.length]);
  const { contextData } = useContext(AppContext);
  const { user, deleteComment } =contextData;
  return (
    <ChatBox>
      <AvatarBox>
        <PersonAvatar src={avatars[randomAvatar]} />
        <AvatarName>{login}</AvatarName>
      </AvatarBox>
      <CommentBox>
        <CommentTimeStamp>{timeStamp}</CommentTimeStamp>
        <Comment>{comment}</Comment>
        {user && login===user.login? <DeleteButton onClick={()=> deleteComment(item, id)}><FiX/></DeleteButton> : null}
      </CommentBox>
    </ChatBox>
  );
};

CommentComponent.propTypes = {
  login: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default CommentComponent;
