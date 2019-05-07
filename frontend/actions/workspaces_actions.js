import * as workspacesApiUtil from "../util/workspaces_api_util";

import { receiveSessionErrors } from "./session_actions";

export const RECEIVE_WORKSPACE = "RECEIVE_WORKSPACE";


const receiveWorkspace = (workspace) => ({
    type: RECEIVE_WORKSPACE,
    workspace
});

export const createWorkspace = (workspace) => (dispatch) => (
    workspacesApiUtil.createWorkspace(workspace)
        .then(res => dispatch(receiveWorkspace(res)),
        err => dispatch(receiveSessionErrors(err)))
)

// #TODO considering the use case of fetchWorkspace, is receiveSessionErrors a fitting catch error?
export const fetchWorkspace = (workspaceId) => (dispatch) => (
    workspacesApiUtil.fetchWorkspace(workspaceId)
        .then(res => dispatch(receiveWorkspace(res)),
        err => dispatch(receiveSessionErrors(err)))
)

// #TDDO look up whether it's prudent to return res at then end of .then
export const fetchWorkspaceByName = (workspaceName) => (dispatch) => (
    workspacesApiUtil.fetchWorkspaceByName(workspaceName)
        .then(res => dispatch(receiveWorkspace(res)),
        err => dispatch(receiveSessionErrors(err)))
)
