import { RECEIVE_CHANNELS } from "../actions/channels_actions";
import { merge } from "lodash";

const channelsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_CHANNELS:
            newState = merge({}, state, action.channels);
            return newState;
        default:
            return state;
    }
}

export default channelsReducer;