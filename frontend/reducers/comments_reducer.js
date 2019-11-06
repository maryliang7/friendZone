import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';


const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      let allComments = {}
      Object.values(action.posts).forEach(post => {
        if (post.comments) {
          Object.values(post.comments).forEach(comment => allComments[comment.id] = comment);
        }
      })
      return Object.assign({}, allComments);
    case RECEIVE_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      let nextState = Object.assign({}, state);
      delete nextState[action.commentId];
      return nextState;
    default:
      return state;
  }
}

export default commentsReducer;