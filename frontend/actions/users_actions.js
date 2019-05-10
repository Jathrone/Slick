import * as usersApiUtil from "../util/users_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUser = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const fetchRelevantUsers = (workspaceId) => (dispatch) => (
    usersApiUtil.fetchRelevantUsers(workspaceId)
        .then(res => dispatch(receiveUser(res)))
);