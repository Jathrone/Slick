import { connect } from "react-redux";
import { createMessage, fetchAllMessages, receiveMessage } from "../../actions/messages_actions";
import MainSection from "./main_section";
import { getMessages } from "../../reducers/messages_selector";

const [senderId, parentType, parentId] = [1, "Channel", 1];

const mapStateToProps = (state) => ({
    parentType,
    parentId,
    messages: getMessages(state)
})

const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: ({body}) => dispatch(createMessage(senderId, parentType, parentId, body)),
        fetchAllMessages: () => dispatch(fetchAllMessages(parentType, parentId)),
        receiveMessage: (message) => dispatch(receiveMessage(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);