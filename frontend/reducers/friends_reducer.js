import {
  ADD_REQUEST,
  DELETE_REQUEST,
  ADD_FRIEND,
  DELETE_FRIEND
} from '../actions/friend_actions';


export const friendRequestsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_REQUEST:
      return Object.assign({}, state, { [action.request.id]: action.request });
    case DELETE_REQUEST:
      let newState = Object.assign({}, state);
      delete newState[action.requestId];
      return newState;
    default:
      return state;
  }
}

export const friendshipsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_FRIEND:
      return Object.assign({}, state, { [action.friendship.id]: action.friendship });
    case DELETE_FRIEND:
      let newState = Object.assign({}, state);
      delete newState[action.friendshipId];
      return newState;
    default:
      return state;
  }
}