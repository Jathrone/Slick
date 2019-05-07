import { connect } from "react-redux";
import { createMessage, fetchAllMessages, receiveMessage } from "../../actions/messages_actions";
import MainSection from "./main_section";
import { getMessages } from "../../reducers/messages_selector";
import { toggleMainWorkspace } from "../../actions/workspaces_actions";

// const senderId = 1;

const mapStateToProps = (state) => {
    const parentType = state.ui.workspaceLayout.mainChat.parentType;
    const parentId = state.ui.workspaceLayout.mainChat.parentId;
    return{
    senderId: 1,
    parentType,
    parentId,
    messages: getMessages(state, parentType, parentId)
}};

const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: (senderId, parentType, parentId, body) => dispatch(createMessage(senderId, parentType, parentId, body)),
        fetchAllMessages: (parentType, parentId) => dispatch(fetchAllMessages(parentType, parentId)),
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        toggleMainWorkspace: ({parentType, parentId}) => dispatch(toggleMainWorkspace(parentType, parseInt(parentId)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);