export const CLOSE_CHAT_ITEM_MODAL = "CLOSE_CHAT_ITEM_MODAL";
export const OPEN_CHAT_ITEM_MODAL = "OPEN_CHAT_ITEM_MODAL";

export const closeChatItemModal = () => ({
    type: CLOSE_CHAT_ITEM_MODAL
});

export const openChatItemModal = (messageId) => ({
    type: OPEN_CHAT_ITEM_MODAL,
    messageId
})
