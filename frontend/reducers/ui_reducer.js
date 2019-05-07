import { combineReducers } from "redux";
import logInModalReducer from "./log_in_modal_reducer";
import workspaceLayoutReducer from "./workspace_layout_reducer";

const UiReducer = combineReducers({
    logInModal: logInModalReducer,
    workspaceLayout: workspaceLayoutReducer
})

export default UiReducer;