import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import UserAuthForm from "./user_auth_form";


// #TODO what happens if there is no workspaceId? 
const mapStateToProps = (state, ownProps) => {
    const workspaceId = ownProps.match.params.workspaceId;
    return ({
        submitButtonText: "Sign in",
        workspaceName: state.entities.workspaces[workspaceId].name,
        workspaceId
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        action: (user) => dispatch(login(user))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthForm);