import * as directMessagesApiUtil from "../util/direct_messages_api_util";

export const RECEIVE_DIRECT_MESSAGES = "RECEIVE_DIRECT_MESSAGES";

export const RECEIVE_DIRECT_MESSAGE = "RECEIVE_DIRECT_MESSAGE";

const receiveDirectMessages = (directMessages) => ({
    type: RECEIVE_DIRECT_MESSAGES,
    directMessages
});

const receiveDirectMessage = (directMessage) => ({
    type: RECEIVE_DIRECT_MESSAGE,
    directMessage
});

export const fetchRelevantDirectMessages = () => (dispatch) => (
    directMessagesApiUtil.fetchRelevantDirectMessages()
        .then(res => dispatch(receiveDirectMessages(res)))
);

export const createDirectMessage = (userIds) => (dispatch) => (
    directMessagesApiUtil.createDirectMessage(userIds)
        .then(res => (dispatch(receiveDirectMessage(res))))
)