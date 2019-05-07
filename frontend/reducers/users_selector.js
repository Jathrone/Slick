export const getCurrentUser = (state) => (
    state.entities.users[state.session.currentUserId]
)