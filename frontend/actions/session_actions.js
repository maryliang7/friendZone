import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";


export const login = (user) => (dispatch) => (
  APIUtil.login(user)
    .then(received_user => dispatch(receiveCurrentUser(received_user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user)
    .then(received_user => dispatch(receiveCurrentUser(received_user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateUser = (user) => (dispatch) => (
  APIUtil.updateUser(user)
    .then(received_user => dispatch(receiveCurrentUser(received_user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchUser = (id) => (dispatch) => (
  APIUtil.fetchUser(id).then(received_user => dispatch(receiveCurrentUser(received_user)))
);

export const fetchAllUsers = () => (dispatch) => (
  APIUtil.fetchAllUsers().then(users => dispatch(receiveAllUsers(users)))
);

export const logout = () => (dispatch) => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
})

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

