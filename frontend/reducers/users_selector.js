export const getCurrentUser = (state) => (
    state.entities.users[state.session.currentUserId]
);

export const getUserFromMessage = (state, message) => (
    state.entities.users[message.senderId]
);