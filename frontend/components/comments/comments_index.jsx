import React from 'react';
import CommentsItemContainer from './comments_item_container';

export default class CommentsIndex extends React.Component {
  render() {
    let { comments, users } = this.props
    return(
      <div>
        {comments.map(comment => <CommentsItemContainer key={comment.id} comment={comment} />)}
      </div>
    )
  }
}