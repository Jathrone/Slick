import { RECEIVE_AUTH_PAGE_UI, ClEAR_AUTH_PAGE_UI } from "../actions/auth_page_ui_actions";
import { merge } from "lodash";

const authPageUiReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case RECEIVE_AUTH_PAGE_UI:
            newState = merge({}, state, action.payload );
            return newState;
        case ClEAR_AUTH_PAGE_UI:
            return {};
        default:
            return state;
    }
}

export default authPageUiReducer;