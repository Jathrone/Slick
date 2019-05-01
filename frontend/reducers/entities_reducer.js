import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import workspacesReducer from "./workspaces_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    workspaces: workspacesReducer
})

export default entitiesReducer;