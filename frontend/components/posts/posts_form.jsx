import React from 'react';

export default class PostsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      location_id: this.props.user.id,
      photo: null,
      loading: false
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true })
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    formData.append('post[author_id]', this.state.author_id);
    formData.append('post[location_id]', this.state.location_id);
    if (this.state.photo) {
      formData.append('post[photo]', this.state.photo);
    }
    this.props.createPost(formData).then(() => {
      this.setState({ body: "", photo: null, loading: false })
    });
  }

  handleInput() {
    return (e) => {
      this.setState({ body: e.target.value })
    }
  }

  handleFile(e) {
    this.setState({ photo: e.currentTarget.files[0]})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
      this.setState({ location_id: this.props.user.id }, () => (
        this.props.fetchUser(this.props.match.params.userId)
        
      ))
    }
  }

  render() {
    let loading;

    if (this.state.loading) {
      loading = <i className="fas fa-spin fa-spinner"></i>
    }

    return(
      <div className="post-box">
        <div className="post-form-header">
          <div className="ppencil"><i className="fas fa-pencil-alt"></i>Create Post</div>
          <label htmlFor="post-photo-upload"><i className="fas fa-camera"></i>Photo/Video</label>
          <input type="file" name="post-photo" 
            id="post-photo-upload" 
            accept=".jpg, .jpeg, .png"
            onChange={this.handleFile.bind(this)}
          />
          <p className="post-file">{this.state.photo ? this.state.photo.name : ""}</p>
        </div>
        <form className="post-form" onSubmit={this.handleSubmit}>
          <textarea placeholder="Create a post.." value={this.state.body} onChange={this.handleInput()} />
          <input type="submit" value="Post"/>
          {loading}
        </form>
      </div>
    )
  }
}