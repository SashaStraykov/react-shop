import {
  IonAvatar, IonInput, IonItem, IonLabel, IonList, IonIcon,
} from '@ionic/react';
import { sendOutline, closeOutline } from 'ionicons/icons';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/dataArtPhoto.png';
import './CommentBox.css';
import { AppContext } from '../../app/context';

const CommentBox = ({
  comments, commentValue, setCommentValue, postComment,
  deleteComment, id,
}) => {
  const { appContextData } = useContext(AppContext);
  const { user } = appContextData;
  return (
    <IonList className="commentWrapper">
      {comments && comments.length > 0 ? comments.map((com) => (
        <IonItem className="commentItem" key={com.id}>
          <IonAvatar>
            <img src={logo} alt={logo} />
          </IonAvatar>
          <IonLabel className="commentLabel">
            <h2>{com.login}</h2>
            <p className="commentP">{com.comment}</p>
          </IonLabel>
          {user && user.login === com.login
          && <IonIcon className="commentCancelIcon" onClick={() => deleteComment(id, com.id)} icon={closeOutline} />}
        </IonItem>
      )) : <span className="commentSpan">Still no comments...</span>}
      {user && (
      <IonItem className="commentItem">
        <IonLabel className="commentInputLabel" position="floating">Type to remain a comment...</IonLabel>
        <IonInput value={commentValue} onIonChange={(e) => setCommentValue(e.target.value)} className="commentInput" />
        <IonIcon onClick={postComment} className="commentIconSend" slot="end" icon={sendOutline} />
      </IonItem>
      )}
    </IonList>
  );
};

CommentBox.defaultProps = {
  comments: null,
  id: null,
};

CommentBox.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string,
    ),
  ),
  commentValue: PropTypes.string.isRequired,
  setCommentValue: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default CommentBox;
