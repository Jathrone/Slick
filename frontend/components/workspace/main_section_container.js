import { connect } from "react-redux";
import { createMessage, fetchAllMessages, receiveMessage, updateMessage, deleteMessage, eraseMessage } from "../../actions/messages_actions";
import MainSection from "./main_section";
import { getMessages } from "../../reducers/messages_selector";


const mapStateToProps = (state, ownProps) => {
    const {parentType, parentId} = ownProps;
    return {
    messages: getMessages(state, parentType, parentId)
}};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {parentType, parentId, currentUserId} = ownProps;
    return {
        createMessage: (body) => dispatch(createMessage(currentUserId, parentType, parentId, body)),
        updateMessage: (id, body) => dispatch(updateMessage(id, body)),
        deleteMessage: (id) => dispatch(deleteMessage(id)),
        fetchAllMessages: () => dispatch(fetchAllMessages(parentType, parentId)),
        receiveMessage: (payload) => dispatch(receiveMessage(payload)),
        eraseMessage: (payload) => dispatch(eraseMessage(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);