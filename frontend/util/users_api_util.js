export const fetchRelevantUsers = (workspaceId) => (
    $.ajax({
        method:"get",
        url:`api/users?workspace_id=${workspaceId}`
    })
)