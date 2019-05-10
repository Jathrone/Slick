import { connect } from "react-redux";
import { getCurrentUser } from "../../reducers/users_selector";
import WorkspaceNavBar from "./workspace_nav_bar";

const mapStateToProps = (state) => {
    const currentUser= getCurrentUser(state);
    return {
    currentUser,
    currentWorkspace: state.entities.workspaces[currentUser.workspaceId]
}}


export default connect(mapStateToProps)(WorkspaceNavBar);