import * as APIUtil from '../util/comments_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "DELETE_COMMENT";

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
})

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
})


export const createComment = (comment) => (dispatch) => (
  APIUtil.createComment(comment).then((comment) => dispatch(receiveComment(comment)))
)

export const updateComment = (comment) => (dispatch) => (
  APIUtil.updateComment(comment).then((comment) => dispatch(receiveComment(comment)))
)

export const deleteComment = (id) => (dispatch) => (
  APIUtil.deleteComment(id).then((comment) => dispatch(removeComment(comment.id)))
)
