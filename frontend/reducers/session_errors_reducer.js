import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            newState = state.slice();
            newState = newState.concat(action.errors);
            return newState;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;