import React from 'react';
import { Link } from 'react-router-dom';

export default class CommentsItem extends React.Component {
  constructor(props) {
    super(props)
    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment() {
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    let { comment, users, currentUser } = this.props;
    let deleteButton;

    if (currentUser.id === comment.authorId) {
      deleteButton = <i className="far fa-times-circle" onClick={this.deleteComment} ></i>
    }

    return(
      <div className="one-comment">
        <img src={users[comment.authorId].profilePicUrl} />
        <div className="comment-body">
          <Link to={`/users/${comment.authorId}`}>
            {users[comment.authorId].firstName} {users[comment.authorId].lastName}
          </Link>
          <p>
            {comment.body}
          </p>
        </div>
        {deleteButton}
      </div>
    )
  }
}