// export const formatActiveWorkspaces = (state) => {
//     return state.session.allCurrentUsersIds.map((userId) => {
//         const workspaceId = state.entities.users[userId].workspaceId;
//         return state.entities.workspaces[workspaceId]
//     })
// }

// export const fetchWorkspacesIdsFromUsersIds = (state) => {
//     return state.session.allCurrentUsersIds.map(userId => {
//         return state.entities.users[userId].workspaceId
//     })
// }

export const currentUserIdAndWorkspaceNames = (state) => {
    let mapped_slice = [];
    if (Object.keys(state.entities.workspaces).length === 0) {
        return mapped_slice;
    }
    state.session.allCurrentUsersIds.forEach(userId => {
        let workspaceId = state.entities.users[userId].workspaceId;
        if (state.entities.workspaces[workspaceId]){
            let workspaceName = state.entities.workspaces[workspaceId].name;
            mapped_slice.push({userId, workspaceName});
        }
    })
    return mapped_slice;
}