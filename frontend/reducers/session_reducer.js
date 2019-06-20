import { merge } from "lodash";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, LOGOUT_OTHER_USER, DEACTIVATE_SESSION } from "../actions/session_actions";

// stores both currentUserId and an array of allCurrentUsersIds
// #TODO consider separating into two reducers
const defaultState = {currentUserId: null, allCurrentUsersIds: []}
const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState;
    let userId;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            userId = action.payload.user.id;
            newState = merge({}, state);
            newState.currentUserId = userId;
            if (!newState.allCurrentUsersIds.includes(userId)) {
                newState.allCurrentUsersIds.push(userId)
            }
            return newState;
        case LOGOUT_CURRENT_USER:
            newState = merge({}, state);
            userId = newState.currentUserId; //no need to worry about dup here, since strings are immutable
            newState.currentUserId = null;
            if (newState.allCurrentUsersIds.includes(userId)) {
                // consider removing all duplicate userIds here?
                newState.allCurrentUsersIds.splice(newState.allCurrentUsersIds.indexOf(userId), 1)
            }
            return newState;
        
        case DEACTIVATE_SESSION:
            newState = merge({}, state);
            newState.currentUserId = null;
            return newState;

        // #TODO consider removing non-current_user logouts for post development
        case LOGOUT_OTHER_USER:
            newState = merge({}, state);
            userId = action.userId;
            if (newState.allCurrentUsersIds.includes(userId)) {
                // consider removing all duplicate userIds here?
                newState.allCurrentUsersIds.splice(newState.allCurrentUsersIds.indexOf(userId), 1)
            }
            if (newState.currentUserId === userId) {
                newState.currentUserId = null;
            }
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;