import React from "react";
import { closeChatItemModal } from "../../actions/chat_item_modal_actions";
import { connect } from "react-redux";


const ChatItemModal = ({ modalState, closeChatItemModal, messageId, placeMessageUnderEdit, deleteMessage }) => {
    if (modalState !== messageId) {
        return null;
    }

    const handleEditClick = () => {
        placeMessageUnderEdit(messageId);
        closeChatItemModal();
    }

    const handleDeleteClick = () => {
        deleteMessage();
        closeChatItemModal();
    }

    const chatItemActions = [];
    chatItemActions.push(<li key="edit"><button onClick={handleEditClick}>Edit message</button></li>);
    chatItemActions.push(<li key="delete"><button onClick={handleDeleteClick}>Delete this message</button></li>);

    return (
        <>
            <div className="chat-item-modal-child" onClick={e => e.stopPropagation()}>
                <ul className="chat-item-actions-list">
                    {/* <li>Edit Message</li>
                    <li>Delete Message</li> */}
                    {chatItemActions}
                </ul>
            </div>
            <div className="modal-background" onClick={closeChatItemModal}>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => ({
    modalState: state.ui.chatItemModal,
    messageId: ownProps.messageId
})

const mapDispatchToProps = dispatch => ({
    closeChatItemModal: () => dispatch(closeChatItemModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatItemModal);