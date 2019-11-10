import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import usersReducer from './users_reducer';
import { friendRequestsReducer, friendshipsReducer } from './friends_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './like_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  likes: likesReducer,
  friendships: friendshipsReducer,
  friendRequests: friendRequestsReducer
});

export default entitiesReducer;