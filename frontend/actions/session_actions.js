import * as sessionApiUtil from "../util/session_api_util";
import { fetchWorkspace } from "./workspaces_actions";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

// #TODO consider removing non-current_user logouts for post development
export const LOGOUT_OTHER_USER = "LOGOUT_OTHER_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";


const receiveCurrentUser = (payload) => ({
    type: RECEIVE_CURRENT_USER,
    payload
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

// #TODO consider removing non-current_user logouts for post development
const logoutOtherUser = (userId) => ({
    type: LOGOUT_OTHER_USER,
    userId
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON
})

// #TODO login throws a weird error dispatched with empty user arg
export const login = (user) => (dispatch) => {
    return(
        sessionApiUtil.login(user)
        .then(res => dispatch(receiveCurrentUser(res)),
        err => dispatch(receiveSessionErrors(err)))
    )
}

export const logout = () => (dispatch) => (
    sessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()),
        err => dispatch(receiveSessionErrors(err)))
)

// #TODO consider removing non-current_user logouts for post development
export const otherLogout = (userId) => (dispatch) => (
    sessionApiUtil.logout(userId)
        .then(() => dispatch(logoutOtherUser(userId)),
        err => dispatch(receiveSessionErrors(err)))
) 

export const signup = (user) => (dispatch) => (
    sessionApiUtil.signup(user)
        .then(res => dispatch(receiveCurrentUser(res)),
        err => dispatch(receiveSessionErrors(err)))
)

export const activateSession = (userId) => (dispatch) => (
    sessionApiUtil.activateSession(userId)
        .then(res => dispatch(receiveCurrentUser(res)),
            err => dispatch(receiveSessionErrors(err)))
)

// #TODO remember to update demoUser often! when database changes!
const demoUser = {workspace_id: 5, email: "user@demo.com", password: "password"}


// #TODO modify signInDemoUser to take in a getState and eliminate unnecessary fetchWorkspaces
export const signInDemoUser = () => (dispatch) => {
    return (sessionApiUtil.login(demoUser)
        .then(res => {
            // dispatch(fetchWorkspace(res.user.workspaceId));
            return dispatch(receiveCurrentUser(res))
        },
            err => {

                return dispatch(receiveSessionErrors(err))}
            )


        .then(payload => {
            return dispatch(fetchWorkspace(payload.payload.user.workspaceId))
        },
            err => {
                return dispatch(receiveSessionErrors(err))
            })
    )
}