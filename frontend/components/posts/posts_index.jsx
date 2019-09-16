import React from 'react';
import { userInfo } from 'os';
import PostsIndexItemContainer from './posts_index_item_container';

export default class PostsIndex extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchPosts({ location_id: this.props.user.id })
  }
  render() {
    if (!this.props.posts) {
      return null;
    }
    return (
      <div>
        {this.props.posts.map((post) => <PostsIndexItemContainer key={post.id} post={post}/>)}
      </div>
    )
  }
}

PostsIndex.defaultProps = {
  posts: [],
  user: {}
};
