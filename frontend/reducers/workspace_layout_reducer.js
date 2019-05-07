import { combineReducers } from "redux";
import workspaceMainChatReducer from "./workspace_main_chat_reducer";

const workspaceLayoutReducer = combineReducers({
    mainChat: workspaceMainChatReducer
})

export default workspaceLayoutReducer;