import * as messageApiUtil from "../util/messages_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const ERASE_MESSAGE = "ERASE_MESSAGE";

const receiveMessages = (payload) => ({
    type: RECEIVE_MESSAGES,
    payload: payload
});

export const receiveMessage = (payload) => ({
    type: RECEIVE_MESSAGE, 
    payload: payload
});

export const eraseMessage = (payload) => ({
    type: ERASE_MESSAGE,
    payload: payload
})

export const fetchAllMessages = (parentType, parentId) => (dispatch) => (
    messageApiUtil.fetchAllMessages(parentType, parentId)
        .then(res => dispatch(receiveMessages(res)))
);

export const createMessage = (senderId, parentType, parentId, body) => (dispatch) => (
    messageApiUtil.createMessage(senderId, parentType, parentId, body)
);

export const updateMessage = (id, body) => (dispatch) => (
    messageApiUtil.updateMessage(id, body)
);

export const deleteMessage = (id) => (dispatch) => (
    messageApiUtil.deleteMessage(id)
);