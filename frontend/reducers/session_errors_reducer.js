import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from "../actions/session_actions";
import { RECEIVE_WORKSPACE } from "../actions/workspaces_actions";
import { union } from "lodash";


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_WORKSPACE:
            return [];
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;