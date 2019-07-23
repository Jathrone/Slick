import React from "react";
import { closeLogInModal } from "../../actions/log_in_modal_actions";
import { connect } from "react-redux";
import ActiveWorkspaceListContainer from "./active_workspace_list_container";
import { Link } from "react-router-dom";
import { receiveAuthPageUi } from "../../actions/auth_page_ui_actions"; 


const LogInModal = ({ modalState, closeLogInModal, authPageUi, receiveAuthPageUi }) => {
    if (!modalState) {
        return null;
    }

    let createWorkspaceLink;
    if (Object.keys(authPageUi).length === 0) {
        createWorkspaceLink = <Link 
        onClick={closeLogInModal}
        to={{
            pathname: "/get-started",
            }}><i className="fab fa-slack"></i>Create Workspace</Link>
    } else {
        createWorkspaceLink = <a onClick={() => {
            closeLogInModal();
            receiveAuthPageUi({
                getStarted: true,
                findWorkspace: false,
                emailReady: false
            });
        }}><i className="fab fa-slack"></i>Create Workspace</a>
    }

    return (
        <>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <ActiveWorkspaceListContainer />
                <Link onClick={closeLogInModal} to={`/signin`}><i className="fas fa-plus"></i>Sign into Another Workspace</Link>
                {createWorkspaceLink}
            </div>
            <div className="modal-background" onClick={closeLogInModal}>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    modalState: state.ui.logInModal,
    authPageUi: state.ui.authPageUi
})

const mapDispatchToProps = dispatch => ({
    closeLogInModal: () => dispatch(closeLogInModal()),
    receiveAuthPageUi: (payload) => dispatch(receiveAuthPageUi(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInModal)