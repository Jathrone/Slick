export const fetchAllMessages = (parentType, parentId) => (
    $.ajax({
        method: "get",
        url: `api/messages?parent_type=${parentType}&parent_id=${parentId}`
    })
)