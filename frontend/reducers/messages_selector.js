export const getMessages = (state, parentType, parentId) => (
    Object.values(state.entities.messages).filter(message => (
        (message.parentType === parentType) && (message.parentId === parentId)
    ))
);