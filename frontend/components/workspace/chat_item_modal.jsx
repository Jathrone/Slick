import React from "react";
import { closeChatItemModal } from "../../actions/chat_item_modal_actions";
import { connect } from "react-redux";


const ChatItemModal = ({ modalState, closeChatItemModal, messageId }) => {
    if (modalState !== messageId) {
        return null;
    }

    const chatItemActions = [];
    chatItemActions.push(<li key="edit">Edit message</li>);
    chatItemActions.push(<li key="delete">Delete this message</li>);

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