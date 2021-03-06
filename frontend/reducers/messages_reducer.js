import { merge } from "lodash";
import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, ERASE_MESSAGE } from "../actions/messages_actions";

const messagesReducer = ( state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_MESSAGES:
            newState = merge({}, state, action.payload.messages);
            return newState;
        case RECEIVE_MESSAGE:
            newState = merge({}, state, {[action.payload.message.id]: action.payload.message})
            return newState;
        case ERASE_MESSAGE:
            newState = merge({}, state);
            delete newState[action.payload.message.id];
            return newState;
        default:
            return state;
    }
}

export default messagesReducer;