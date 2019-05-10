import { merge } from "lodash";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from "../actions/messages_actions";
import { RECEIVE_USERS } from "../actions/users_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = merge({}, state, {[action.payload.user.id]: action.payload.user});
            return newState;
        case RECEIVE_USERS:
            newState = merge({}, state, action.users)
            return newState;
        case RECEIVE_MESSAGES:
            newState = merge({}, state, action.payload.senders)
            return newState;
        case RECEIVE_MESSAGE:
            newState = merge({}, state, {[action.payload.sender.id]: action.payload.sender})
        default:
            return state;
    }
}

export default usersReducer;