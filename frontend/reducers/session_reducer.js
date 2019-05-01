import { merge } from "lodash";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const defaultState = {currentUserId: null}
const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = {currentUserId: action.user.id};
            return newState;
        case LOGOUT_CURRENT_USER:
            newState = merge({}, defaultState)
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;