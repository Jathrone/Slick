import { TOGGLE_MAIN_WORKSPACE } from "../actions/workspaces_actions";
import { merge } from "lodash";

const defaultState = {parentType: "Channel", parentId: 1}

const workspaceMainChatReducer = (state = defaultState, action) => {
    Object.freeze(state)
    let newState
    switch (action.type) {
        case TOGGLE_MAIN_WORKSPACE:
            return action.payload
        default:
            return state
    }
}

export default workspaceMainChatReducer;