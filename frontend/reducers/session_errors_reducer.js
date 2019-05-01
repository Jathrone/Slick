import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";
import { RECEIVE_WORKSPACE } from "../actions/workspaces_actions";


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            newState = state.slice();
            // #TODO deal with duplicate errors?
            newState = newState.concat(action.errors);
            return newState;
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_WORKSPACE:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;