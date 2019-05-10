export const getCurrentUser = (state) => (
    state.entities.users[state.session.currentUserId]
);

export const getUserFromMessage = (state, message) => (
    state.entities.users[message.senderId]
);

export const getWorkspaceUsers = (state, currentUser) => (
    Object.values(state.entities.users).filter((user) => (
        (currentUser.workspaceId === user.workspaceId) && (user.id !==currentUser.id)
    ))
)