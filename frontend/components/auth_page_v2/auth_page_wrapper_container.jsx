import React from "react";
import { connect } from "react-redux";
import LogInModal from "../splash/log_in_modal";
import { openLogInModal } from "../../actions/log_in_modal_actions";
import AuthPageWrapper from "./auth_page_wrapper";
import { receiveAuthPageUi, clearAuthPageUi } from "../../actions/auth_page_ui_actions"; 
import { createWorkspace } from "../../actions/workspaces_actions";
import { signup, login } from "../../actions/session_actions";
import { clearSessionErrors } from "../../actions/session_actions";
import { fetchWorkspaceByName, fetchAllWorkspaces } from "../../actions/workspaces_actions";

const mapStateToProps = (state) => {
    return {
        loggedIn: !(state.session.allCurrentUsersIds.length === 0),
        authPageUi: state.ui.authPageUi,
        allWorkspaces: Object.values(state.entities.workspaces)
    };
}

const mapDispatchToProps = (dispatch) => ({
    yourWorkspacesButton: (
        <div className="auth-page-modal-button-container">
            <button onClick={() => dispatch(openLogInModal())} className="auth-page-modal-button auth-page-header-button"><i className="fab fa-slack"></i> Your Workspaces</button>
            <LogInModal />
        </div>
    ),
    receiveAuthPageUi: (payload) => dispatch(receiveAuthPageUi(payload)),
    clearAuthPageUi: () => dispatch(clearAuthPageUi()),
    createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
    signup: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    fetchWorkspaceByName: (workspace) => dispatch(fetchWorkspaceByName(workspace.name)),
    login: (user) => dispatch(login(user)),
    fetchAllWorkspaces: () => dispatch(fetchAllWorkspaces())
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthPageWrapper);