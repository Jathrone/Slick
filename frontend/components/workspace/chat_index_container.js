import { connect } from "react-redux";
import ChatIndex from "./chat_index";
import { fetchAllMessages } from "../../actions/messages_actions"; 
import { getMessages } from "../../reducers/messages_selector";

const mapStateToProps = (state) => ({
    messages: getMessages(state)
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllMessages: (parentType, parentId) => dispatch(fetchAllMessages(parentType, parentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatIndex);