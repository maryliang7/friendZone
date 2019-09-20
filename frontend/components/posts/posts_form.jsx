import React from 'react';

export default class PostsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      location_id: this.props.user.id
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.createPost(this.state);
    this.setState({ body: "" })
    e.target.value = "";
  }

  handleInput() {
    return (e) => {
      this.setState({ body: e.target.value })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
      this.setState({ location_id: this.props.user.id }, () => (
        this.props.fetchUser(this.props.match.params.userId)
        
      ))
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
          <textarea placeholder="Create a post.." value={this.state.body} onChange={this.handleInput()} />
          <input type="submit" value="Post"/>
        </form>
      </div>
    )
  }
}