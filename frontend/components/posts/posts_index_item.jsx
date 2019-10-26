import React from 'react';
import { formatDatePost } from '../../util/date_util';
import { Link } from 'react-router-dom';
import CommentsFormContainer from '../comments/comments_form_container';

export default class PostsIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.deletePost = this.deletePost.bind(this);
  }

  deletePost() {
    this.props.deletePost(this.props.post.id);
  }

  render() {
    if (Object.keys(this.props.users).length < 2 || !this.props.post ) {
      return null
    }

    let { post, users, currentUser } = this.props;

    let deleteButton, title;

    if (post.authorId === currentUser.id || post.locationId === currentUser.id ) {
      deleteButton = <i onClick={this.deletePost} className="far fa-trash-alt"></i>
    }

    // debugger
    if (this.props.newsfeed) {
      title = (post.locationId === post.authorId) ? (
          <span className="post-users">
            <Link to={`/users/${post.locationId}`}>
              {users[post.locationId].firstName} {users[post.locationId].lastName}
            </Link>
          </span>
        ) : (
          <span className="post-users">
            <Link to={`/users/${post.authorId}`}>
              {users[post.authorId].firstName} {users[post.authorId].lastName}
            </Link>
            <i className="fas fa-caret-right"></i>
            <Link to={`/users/${post.locationId}`}>
              {users[post.locationId].firstName} {users[post.locationId].lastName}
            </Link>
          </span>
        )
    } else {
      title = (post.locationId === post.authorId) ? (
        <span className="post-users">{users[post.locationId].firstName} {users[post.locationId].lastName}</span>
      ) : (
        <span className="post-users">
          <Link to={`/users/${post.authorId}`}>
            {users[post.authorId].firstName} {users[post.authorId].lastName}
          </Link>
          <i className="fas fa-caret-right"></i>
          {users[post.locationId].firstName} {users[post.locationId].lastName}
        </span>
      )
    }

    return (
      <div className="post-and-comment">
        <div className="one-post">
          {deleteButton}
          <div className="post-headers">
            <div className="post-photo">
              <img src={users[post.authorId].profilePicUrl} />
            </div>
            <div className="post-info">
              {title}
              <p>{formatDatePost(this.props.post.createdAt)}</p>
            </div>
          </div>
          <section className="post-body">{post.body}</section>
          <div className="post-attached-photo"></div>
          <div className="post-lac">
            <p><i className="far fa-thumbs-up"></i>Like</p>
            <p><i className="far fa-comment-alt"></i>Comment</p>
          </div>
        </div>
          <CommentsFormContainer post={post.id}/>
      </div>
    )
  }
}

PostsIndexItem.defaultProps = {
  users: {}
}