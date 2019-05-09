export const fetchAllMessages = (parentType, parentId) => (
    $.ajax({
        method: "get",
        url: `api/messages?parent_type=${parentType}&parent_id=${parentId}`
    })
)

export const createMessage = (senderId, parentType, parentId, body) => (
    $.ajax({
        method: "post",
        url: 'api/messages',
        data: {message: {
            sender_id: senderId,
            parent_type: parentType,
            parent_id: parentId,
            body: body
        }}
    })
)

export const updateMessage = (id, body) => (
    $.ajax({
        method: "patch",
        url: `api/messages/${id}`,
        data: {
            message: {
                body
            }
        }
    })
)

export const deleteMessage = (id) => (
    $.ajax({
        method: "delete",
        url: `api/messages/${id}`
    })
)