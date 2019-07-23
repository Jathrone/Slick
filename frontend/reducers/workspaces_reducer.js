import { merge } from "lodash";
import { RECEIVE_WORKSPACE, RECEIVE_WORKSPACES } from "../actions/workspaces_actions";

const workspacesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_WORKSPACE:
            newState = merge({}, state, {[action.workspace.id]: action.workspace});
            return newState;
        case RECEIVE_WORKSPACES:
            newState = merge({}, action.workspaces)
            return newState;
        default:
            return state
    }
}

export default workspacesReducer;