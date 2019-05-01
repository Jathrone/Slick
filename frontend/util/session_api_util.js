export const signup = (user) => (
    $.ajax({
        method:"post",
        url:"api/users",
        data: {user}
    })
)

export const login = (user) => (
    $.ajax({
        method:"post",
        url:"api/session",
        data: {user}
    })
)

// #TODO consider removing non-current_user logouts for post development
export const logout = (userId) => {
    // #TODO should we try if (Number.isInteger(userId)) here to catch potential 0 index errors with more informative responses?
    if (userId) {
        return (
            $.ajax({
                method: "delete",
                url: "api/session",
                data: {userId}
            })
        )
    }
    else {
        return (
            $.ajax({
                method:"delete",
                url:"api/session"
            })
        )
    }
}