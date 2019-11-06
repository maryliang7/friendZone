import React from 'react';

export default class CommentsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      body: '',
      author_id: this.props.currentUser.id,
      post_id: this.props.postId,
      // parent_id: this.props.parent || null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({ body: "" })
    e.target.value = "";
  }

  handleInput() {
    return (e) => {
      this.setState({ body: e.target.value })
    }
  }


  render() {
    return (
      <div className="comment-container">
        <div className="comment-form-img">
          <img src={this.props.currentUser.profilePicUrl} />
        </div>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Write a comment..." value={this.state.body} onChange={this.handleInput()} />
        </form>
      </div>
    )
  }
}