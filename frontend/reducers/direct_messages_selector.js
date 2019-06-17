export const getDirectMessages = (state) => {
    const directMessages = Object.values(state.entities.directMessages)
    return (directMessages.map((({id, updatedAt, participantIds}) => {
        const usersArray = participantIds.map((userId) => (state.entities.users[userId]))
        return {id,
            updatedAt,
        participants: usersArray}
    })))
};