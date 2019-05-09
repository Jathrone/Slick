import { CLOSE_CHAT_ITEM_MODAL, OPEN_CHAT_ITEM_MODAL } from "../actions/chat_item_modal_actions";

const chatItemModalReducer = (state = false, action) => {
    switch (action.type) {
        case CLOSE_CHAT_ITEM_MODAL:
            return false;
        case OPEN_CHAT_ITEM_MODAL:
            return action.messageId;
        default:
            return state
    }
}

export default chatItemModalReducer;