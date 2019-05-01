import * as sessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON
})

export const login = (user) => (dispatch) => (
    sessionApiUtil.login(user)
        .then(res => dispatch(receiveCurrentUser(res)),
        err => dispatch(receiveSessionErrors(err)))
)

export const logout = () => (dispatch) => (
    sessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()),
        err => dispatch(receiveSessionErrors(err)))
)

export const signup = (user) => (dispatch) => (
    sessionApiUtil.signup(user)
        .then(res => dispatch(receiveCurrentUser(res)),
        err => dispatch(receiveSessionErrors(err)))
)

