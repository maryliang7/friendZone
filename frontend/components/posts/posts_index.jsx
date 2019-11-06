import React from 'react';
import PostsIndexItemContainer from './posts_index_item_container';

export default class PostsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.locationIds)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
      this.props.fetchPosts(this.props.locationIds)
    }
  }
  render() {
    if (!this.props.posts) {
      return null;
    }
    let { currentUser } = this.props

    return (
      <div>
        {this.props.posts.map((post) => <PostsIndexItemContainer 
          newsfeed={this.props.newsfeed} 
          key={post.id} 
          currentUser={currentUser} 
          post={post}
        />)}
      </div>
    )
  }
}

PostsIndex.defaultProps = {
  posts: [],
  user: {}
};
