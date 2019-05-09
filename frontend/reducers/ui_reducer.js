import { combineReducers } from "redux";
import logInModalReducer from "./log_in_modal_reducer";
import chatItemModalReducer from "./chat_item_modal_reducer";


const UiReducer = combineReducers({
    logInModal: logInModalReducer,
    chatItemModal: chatItemModalReducer
})

export default UiReducer;