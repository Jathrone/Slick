import { connect } from "react-redux";
import { fetchWorkspaceByName } from "../../actions/workspaces_actions";
import WorkspaceAuthForm from "./workspace_auth_form";


const mapStateToProps = state => ({
    formPath: "signin"
})
const mapDispatchToProps = dispatch => ({
    action: (workspace) => dispatch(fetchWorkspaceByName(workspace.name))
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceAuthForm);