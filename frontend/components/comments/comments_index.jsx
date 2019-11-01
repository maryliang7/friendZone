import React from 'react';

export default class CommentsIndex extends React.Component {
  render() {
    let { comments, users } = this.props
    return(
      <div>
        {comments.map(comment => <li>{users[comment.authorId].firstName}</li>)}
      </div>
    )
  }
}