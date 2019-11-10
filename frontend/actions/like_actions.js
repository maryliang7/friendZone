import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "DELETE_LIKE";

const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like
})

const removeLike = (likeId) => ({
  type: REMOVE_LIKE,
  likeId
})


export const createLike = (like) => (dispatch) => (
  APIUtil.createLike(like).then((like) => dispatch(receiveLike(like)))
)

export const deleteLike = (id) => (dispatch) => (
  APIUtil.deleteLike(id).then((like) => dispatch(removeLike(like.id)))
)
