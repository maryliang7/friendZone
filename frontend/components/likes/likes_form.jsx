import React from 'react';

export default class LikesForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: this.props.liked
    }
    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike(e) {
    e.preventDefault();
    if (!this.state.liked) {
      let like = {
        user_id: this.props.currentUser.id,
        post_id: this.props.postId,
      }
      this.props.createLike(like);
      this.setState({ liked: true })
    } else {
      this.props.deleteLike(this.props.like[0].id)
      this.setState({ liked: false })
    }
  }


  render() {
    if (this.state.liked) {
      return (
        <p className="liked-active">
          <button className="like-button" onClick={this.toggleLike}>
            <i className="far fa-thumbs-up"></i>Liked
          </button>
        </p>      
      )
    } else {
      return (
        <p className="liked-inactive">
          <button className="like-button" onClick={this.toggleLike}>
            <i className="far fa-thumbs-up"></i>Like
          </button>
        </p>
      )
    }
  }
}