import { connect } from "react-redux";
import { getCurrentUser } from "../../reducers/users_selector";
import WorkspaceNavBar from "./workspace_nav_bar";
import { openWorkspaceModal } from "../../actions/workspace_session_modal_actions";

const mapStateToProps = (state) => {
    const currentUser= getCurrentUser(state);
    return {
    currentUser,
    currentWorkspace: state.entities.workspaces[currentUser.workspaceId]
}}

const mapDispatchToProps = (dispatch) => {
    return {
        openWorkspaceModal: () => dispatch(openWorkspaceModal())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceNavBar);