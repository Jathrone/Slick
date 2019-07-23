import { OPEN_WORKSPACE_MODAL, CLOSE_WORKSPACE_MODAL } from "../actions/workspace_session_modal_actions";

const workspaceSessionModalReducer = (state = false, action) => {
    switch (action.type) {
        case CLOSE_WORKSPACE_MODAL:
            return false;
        case OPEN_WORKSPACE_MODAL:
            return true;
        default:
            return state
    }
}

export default workspaceSessionModalReducer;