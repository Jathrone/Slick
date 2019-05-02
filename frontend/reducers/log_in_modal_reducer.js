// logInModalReducer will have a state that's either true or false

import { CLOSE_LOG_IN_MODAL, OPEN_LOG_IN_MODAL } from "../actions/log_in_modal_actions";

const logInModalReducer = (state = false, action) => {
    switch (action.type) {
        case CLOSE_LOG_IN_MODAL:
            return false;
        case OPEN_LOG_IN_MODAL:
            return true;
        default:
            return state 
    }
}

export default logInModalReducer;