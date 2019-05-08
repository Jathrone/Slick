import { connect } from "react-redux";
import { createMessage, fetchAllMessages, receiveMessage } from "../../actions/messages_actions";
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
        fetchAllMessages: () => dispatch(fetchAllMessages(parentType, parentId)),
        receiveMessage: (message) => dispatch(receiveMessage(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);