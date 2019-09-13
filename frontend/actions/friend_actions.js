import * as APIUtil from '../util/friends_api_util';


// Friend Requests 

export const ADD_REQUEST = "ADD_REQUEST";
export const DELETE_REQUEST = "DELETE_REQUEST";

const addRequest = (request) => ({
  type: ADD_REQUEST,
  request
})

const deleteRequest = (requestId) => ({
  type: DELETE_REQUEST,
  requestId
})


export const sendFriendRequest = (request) => (dispatch) => (
  APIUtil.sendFriendRequest(request).then((request) => dispatch(addRequest(request)))
)

export const deleteFriendRequest = (request) => (dispatch) => (
  APIUtil.deleteFriendRequest(request).then((request) => dispatch(deleteRequest(request.id)))
)

//Friendships

export const ADD_FRIEND = "ADD_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";


const addFriend = (friendship) => ({
  type: ADD_FRIEND,
  friendship
})

const deleteFriend = (friendshipId) => ({
  type: DELETE_FRIEND,
  friendshipId
})

export const addFriendship = (friendship) => (dispatch) => (
  APIUtil.addFriendship(friendship).then((friendship) => dispatch(addFriend(friendship)))
)

export const deleteFriendship = (friendship) => (dispatch) => (
  APIUtil.deleteFriendship(friendship).then((friendship) => dispatch(deleteFriend(friendship.id)))
)