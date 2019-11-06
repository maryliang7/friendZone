import React from 'react';
import { formatDatePost } from '../../util/date_util';
import { Link } from 'react-router-dom';
import CommentsFormContainer from '../comments/comments_form_container';
import CommentsIndexContainer from '../comments/comments_index_container'

export default class PostsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      body: this.props.post.body
    }
    this.deletePost = this.deletePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  deletePost() {
    this.props.deletePost(this.props.post.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newPost = {
      id: this.props.post.id,
      author_id: this.props.post.authorId,
      location_id: this.props.post.locationId,
      body: this.state.body
    }
    this.props.updatePost(newPost);
    this.setState({ body: "", edit: false })
    e.target.value = "";
  }

  handleInput() {
    return (e) => {
      this.setState({ body: e.target.value })
    }
  }

  toggleEdit() {
    if (this.state.edit) {
      this.setState({ edit: false })
    } else {
      this.setState({ edit: true })
    }
  }

  render() {
    if (Object.keys(this.props.users).length < 2 || !this.props.post ) {
      return null
    }

    let { post, users, currentUser } = this.props;

    let deleteButton, title, editButton;

    if (post.authorId === currentUser.id || post.locationId === currentUser.id ) {
      deleteButton = <i onClick={this.deletePost} className="far fa-trash-alt"></i>
    }
    if (post.authorId === currentUser.id ) {
      editButton = <i onClick={this.toggleEdit} className="far fa-edit"></i>
    }

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

    let postContent, photoContent;

    if (this.state.edit) {
      postContent = (
        <form className="post-edit" onSubmit={this.handleSubmit}>
          <textarea placeholder="Create a post.." value={this.state.body} onChange={this.handleInput()} />
          <button type="button" onClick={this.toggleEdit}> Cancel</button>
          <input type="submit" value="Done Editing" />
        </form>
      )
    } else {
      postContent = post.body
    }

    if (post.photoUrl) {
      photoContent = (
        <div className="post-attached-photo">
          <img src={post.photoUrl} alt="" />
        </div>
      )
    }

    return (
      <div className="post-and-comment">
        <div className="one-post">
          {editButton}
          {deleteButton}
          <div className="post-headers">
            <div className="post-photo">
              <img src={users[post.authorId].profilePicUrl} />
            </div>
            <div className="post-info">
              {title}
              <p>{formatDatePost(post.createdAt)}</p>
            </div>
          </div>
          <section className="post-body">
            {postContent}
            {photoContent}
          </section>
          <div className="post-lac">
            <p><i className="far fa-thumbs-up"></i>Like</p>
            <p><i className="far fa-comment-alt"></i>Comment</p>
          </div>
        </div>
        <div className="post-comments-box">
          <CommentsIndexContainer postId={post.id} />
          <CommentsFormContainer postId={post.id}/>
        </div>
      </div>
    )
  }
}

PostsIndexItem.defaultProps = {
  users: {}
}