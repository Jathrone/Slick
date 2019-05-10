export const fetchRelevantChannels = (workspaceId) => (
    $.ajax({
        method: "get",
        url:`api/channels?workspace_id=${workspaceId}`
    })
)

export const createChannel = (name, workspaceId, topic, purpose) => (
    $.ajax({
        method: "post",
        url: "api/channels",
        data: {channel: {
            name, 
            topic,
            purpose,
            workspace_id: workspaceId
        }}
    })
)