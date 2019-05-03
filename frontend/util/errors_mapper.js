export const errorsMapper = (error) => {
    switch (error) {
        case "workspace not found":
            return "We couldn't find your workspace. If you can't remember your workspace's address, we can send you a reminder."
        case "invalid credentials":
            return "Sorry, you entered an incorrect email address or password."
        case "Creator email can't be blank":
            return "A valid email address must be used to create a workspace."
        case "Name can't be blank":
            return "Workspace must have a Slick name"
        case "Name has already been taken":
            return "Sorry, this workspace name has already been taken, please try another."
        default:
            return `raw error: ${error}`
    }
}