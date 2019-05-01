import { merge } from "lodash";
import { RECEIVE_WORKSPACE } from "../actions/workspaces_actions";

const workspacesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_WORKSPACE:
            newState = merge({}, state, {[action.workspace.id]: action.workspace});
            return newState;
        default:
            return state
    }
}

export default workspacesReducer;