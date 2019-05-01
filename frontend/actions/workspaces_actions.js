import * as workspacesApiUtil from "../util/workspaces_api_util";

export const RECEIVE_WORKSPACE = "RECEIVE_WORKSPACE";

const receiveWorkspace = (workspace) => ({
    type: RECEIVE_WORKSPACE,
    workspace
})

export const createWorkspace = (workspace) => (dispatch) => (
    workspacesApiUtil.createWorkspace(workspace)
        .then(res => dispatch(receiveWorkspace(res)))
)

export const fetchWorkspace = (workspaceId) => (dispatch) => (
    workspacesApiUtil.fetchWorkspace(workspaceId)
        .then(res => dispatch(receiveWorkspace(res)))
)