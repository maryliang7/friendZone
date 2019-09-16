import React from 'react';
import { formatDatePost } from '../../util/date_util';
import { Link } from 'react-router-dom';

export default class PostsIndexItem extends React.Component {


  render() {
    // console.log(this.props);
    let { post, users } = this.props;
    let title = (post.locationId === post.authorId) ? (
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
    return (
      <div className="one-post">
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
        {/* <Comments post={post.id}/> */}
      </div>
    )
  }
}

PostsIndexItem.defaultProps = {
  users: {}
}