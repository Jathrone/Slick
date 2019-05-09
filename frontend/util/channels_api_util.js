export const fetchRelevantChannels = (workspaceId) => (
    $.ajax({
        method: "get",
        url:`api/channels?workspace_id=${workspaceId}`
    })
)

