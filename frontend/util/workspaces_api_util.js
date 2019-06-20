export const createWorkspace = (workspace) => (
    $.ajax({
        method:"post",
        url:"/api/workspaces",
        data:{ workspace }
    })
)

export const fetchWorkspace = (workspaceId) => (
    $.ajax({
        method:"get",
        url: `/api/workspaces/${workspaceId}`
    })
)

export const fetchWorkspaceByName = (workspaceName) => (
    $.ajax({
        method: "get",
        url: `/api/workspaces?name=${workspaceName}`
    })
)

export const fetchAllWorkspaces = () => (
    $.ajax({
        method:"get",
        url:"/api/workspaces"
    })
)