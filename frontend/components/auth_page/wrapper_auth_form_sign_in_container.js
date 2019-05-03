import WrapperAuthForm from "./wrapper_auth_form";
import { connect } from "react-redux";
import { fetchWorkspaceByName } from "../../actions/workspaces_actions";
import { login } from "../../actions/session_actions";
import { clearSessionErrors } from "../../actions/session_actions";



const mapStateToProps = (state) => ({
    submitButtonText: "Sign In",
    getStarted: false,
    emailReady: true
})

const mapDispatchToProps = (dispatch) => ({
    workspaceAction: (workspace) => dispatch(fetchWorkspaceByName(workspace.name)),
    formAction: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(WrapperAuthForm);