import * as messageApiUtil from "../util/messages_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"

const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    payload: messages
});

export const fetchAllMessages = (parentType, parentId) => (dispatch) => {
    messageApiUtil.fetchAllMessages(parentType, parentId)
        .then(res => dispatch(receiveMessages(res)))
};