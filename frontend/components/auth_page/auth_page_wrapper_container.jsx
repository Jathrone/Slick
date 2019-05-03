import React from "react";
import { connect } from "react-redux";
import LogInModal from "../splash/log_in_modal";
import { openLogInModal } from "../../actions/log_in_modal_actions";
import AuthPageWrapper from "./auth_page_wrapper";

const mapStateToProps = (state) => {
    return {
        loggedIn: !(state.session.allCurrentUsersIds.length === 0)
    };
}

const mapDispatchToProps = (dispatch) => ({
    yourWorkspacesButton: (
        <div className="auth-page-modal-button-container">
            <button onClick={() => dispatch(openLogInModal())} className="auth-page-modal-button auth-page-header-button"><i className="fab fa-slack"></i> Your Workspaces</button>
            <LogInModal />
        </div>
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthPageWrapper);