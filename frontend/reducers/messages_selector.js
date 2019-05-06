export const getMessages = (state) => (
    Object.values(state.entities.messages)
);