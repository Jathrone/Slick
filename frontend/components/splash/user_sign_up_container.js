import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import UserAuthFormWrapper from "./user_auth_form";
import { fetchWorkspace } from '../../actions/workspaces_actions';


// #TODO what happens if there is no workspaceId? 
const mapStateToProps = (state, ownProps) => {
    const workspaceId = ownProps.match.params.workspaceId;
    return ({
        submitButtonText: "Sign up",
        workspace: state.entities.workspaces[workspaceId],
        workspaceId
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        action: (user) => dispatch(signup(user)),
        fetchWorkspace: (workspaceId) => dispatch(fetchWorkspace(workspaceId)) // #TODO DRY up
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthFormWrapper);