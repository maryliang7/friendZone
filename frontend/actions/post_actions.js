import * as APIUtil from '../util/posts_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
});

export const fetchPosts = (query) => (dispatch) => (
  APIUtil.fetchPosts(query).then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchPost = (id) => (dispatch) => (
  APIUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const createPost = (post) => (dispatch) => (
  APIUtil.createPost(post).then(post => dispatch(receivePost(post)))
);

export const updatePost = (post) => (dispatch) => (
  APIUtil.updatePost(post).then(post => dispatch(receivePost(post)))
);

export const deletePost = (id) => (dispatch) => (
  APIUtil.deletePost(id).then(post => dispatch(removePost(post.id)))
);

