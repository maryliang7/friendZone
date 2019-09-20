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

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
      this.props.fetchPosts({ location_id: this.props.user.id })
    }
  }
  render() {
    // if (!this.props.posts) {
    //   return null;
    // }
    let { currentUser } = this.props

    return (
      <div>
        {this.props.posts.reverse().map((post) => <PostsIndexItemContainer key={post.id} currentUser={currentUser} post={post}/>)}
      </div>
    )
  }
}

PostsIndex.defaultProps = {
  posts: [],
  user: {}
};
