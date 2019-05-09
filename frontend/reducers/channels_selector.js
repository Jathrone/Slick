export const getChannels = (state, workspaceId) => {
    return Object.values(state.entities.channels).filter((channel) => (
        channel.workspaceId === workspaceId
    ))
}

