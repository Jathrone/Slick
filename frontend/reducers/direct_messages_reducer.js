import { RECEIVE_DIRECT_MESSAGES, RECEIVE_DIRECT_MESSAGE } from "../actions/direct_messages_actions";
import { merge } from "lodash";

const directMessagesReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_DIRECT_MESSAGES:
            newState = merge({}, action.directMessages);
            return newState;
        case RECEIVE_DIRECT_MESSAGE:
            newState = merge({}, state, {[action.directMessage.id]: action.directMessage})
            return newState;
        default:
            return state;
    }
}

export default directMessagesReducer;