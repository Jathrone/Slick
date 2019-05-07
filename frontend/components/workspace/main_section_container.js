import { connect } from "react-redux";
import { createMessage, fetchAllMessages, receiveMessage } from "../../actions/messages_actions";
import MainSection from "./main_section";
import { getMessages } from "../../reducers/messages_selector";
// import { toggleMainWorkspace } from "../../actions/workspaces_actions";

// const senderId = 1;

const mapStateToProps = (state, ownProps) => {
    const {parentType, parentId} = ownProps;
    return{
    senderId: state.session.currentUserId,
    messages: getMessages(state, parentType, parentId)
}};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {parentType, parentId} = ownProps;
    return {
        createMessage: (senderId, body) => dispatch(createMessage(senderId, parentType, parentId, body)),
        fetchAllMessages: (parentType, parentId) => dispatch(fetchAllMessages(parentType, parentId)),
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        // toggleMainWorkspace: ({parentType, parentId}) => dispatch(toggleMainWorkspace(parentType, parseInt(parentId)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);