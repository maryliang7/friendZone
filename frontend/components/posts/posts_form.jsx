import React from 'react';

export default class PostsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: "",
      author_id: this.props.currentUser,
      location_id: this.props.user
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state).then(() => window.location.reload());
  }

  handleInput() {
    return (e) => {
      this.setState({ body: e.target.value })
    }
  }

  render() {
    return(
      <div className="post-box">
        <div className="post-form-header">
          <div className="ppencil"><i className="fas fa-pencil-alt"></i>Create Post</div>
          <div><i className="fas fa-camera"></i>Photo/Video</div>
        </div>
        <form className="post-form" onSubmit={this.handleSubmit}>
          <textarea value={this.state.body} placeholder="Create a post.." onChange={this.handleInput()} />
          <input type="submit" value="Post"/>
        </form>
      </div>
    )
  }
}