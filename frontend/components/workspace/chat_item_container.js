import { connect } from "react-redux";
import ChatItem from "./chat_item";
import { getUserFromMessage } from "../../reducers/users_selector";

const mapStateToProps =  (state, ownProps) => {
    
    return {
        sender: getUserFromMessage(state, ownProps.message)
    }
};

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);