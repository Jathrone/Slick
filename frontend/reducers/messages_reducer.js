import { merge } from "lodash";
import { RECEIVE_MESSAGES } from "../actions/messages_actions";

const messagesReducer = ( state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_MESSAGES:
            newState = merge({}, state, action.payload);
            return newState;
        default:
            return state;
    }
}

export default messagesReducer;