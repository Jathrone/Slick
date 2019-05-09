import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import workspacesReducer from "./workspaces_reducer"
import messagesReducer from "./messages_reducer";
import channelsReducer from "./channels_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    workspaces: workspacesReducer,
    messages: messagesReducer,
    channels: channelsReducer
})

export default entitiesReducer;