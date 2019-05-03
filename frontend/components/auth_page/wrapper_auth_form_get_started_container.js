import WrapperAuthForm from "./wrapper_auth_form";
import { connect } from "react-redux";
import { createWorkspace } from "../../actions/workspaces_actions";
import { signup } from "../../actions/session_actions";
import { clearSessionErrors } from "../../actions/session_actions";


const mapStateToProps = (state) => ({
    submitButtonText: "Sign up",
    getStarted: true,
    emailReady: false
})

const mapDispatchToProps = (dispatch) => ({
    workspaceAction: (workspace) => dispatch(createWorkspace(workspace)),
    formAction: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(WrapperAuthForm);
