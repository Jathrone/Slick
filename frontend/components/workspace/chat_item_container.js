import { connect } from "react-redux";
import ChatItem from "./chat_item";
import { getUserFromMessage } from "../../reducers/users_selector";
import { openChatItemModal } from "../../actions/chat_item_modal_actions";

const mapStateToProps =  (state, ownProps) => {
    
    return {
        sender: getUserFromMessage(state, ownProps.message)
    }
};

const mapDispatchToProps = (dispatch) => ({
    openChatItemModal: (messageId) => dispatch(openChatItemModal(messageId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);