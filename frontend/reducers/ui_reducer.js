import { combineReducers } from "redux";
import logInModalReducer from "./log_in_modal_reducer";

const UiReducer = combineReducers({
    logInModal: logInModalReducer
})

export default UiReducer;