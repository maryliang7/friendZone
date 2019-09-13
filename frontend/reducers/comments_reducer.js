import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';


const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    case DELETE_COMMENT:
      let nextState = Object.assign({}, state);
      delete nextState[action.commentId];
      return nextState;
    default:
      return state;
  }
}

export default commentsReducer;