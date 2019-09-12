import React from 'react';

export default class PostsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ""
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
      <div className="post-form">
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.body} onChange={this.handleInput()} cols="30" rows="10">Create a post..</textarea>
          <input type="submit" value="Post"/>
        </form>
      </div>
    )
  }
}