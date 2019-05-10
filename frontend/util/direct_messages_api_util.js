export const fetchRelevantDirectMessages = (userId) => (
    $.ajax({
        method: "get",
        url: `api/direct_messages?user_id=${userId}`
    })
)

export const createDirectMessage = (userIds) => {
    let url = "api/direct_messages?"
    userIds.forEach((userId) => {
        url = url.concat(`&user_ids[]=${userId}`)
    })

    return $.ajax({
        method: "post",
        url
    })
}