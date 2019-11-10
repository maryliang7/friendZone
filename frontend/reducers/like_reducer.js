import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';


const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      let allLikes = {}
      Object.values(action.posts).forEach(post => {
        if (post.likes) {
          Object.values(post.likes).forEach(like => allLikes[like.id] = like);
        }
      })
      return Object.assign({}, allLikes);
    case RECEIVE_LIKE:
      return Object.assign({}, state, { [action.like.id]: action.like });
    case REMOVE_LIKE:
      let nextState = Object.assign({}, state);
      delete nextState[action.likeId];
      return nextState;
    default:
      return state;
  }
}

export default likesReducer;