import React from "react";
import { closeLogInModal } from "../../actions/log_in_modal_actions";
import { connect } from "react-redux";
import ActiveWorkspaceListContainer from "./active_workspace_list_container";
import { Link } from "react-router-dom";


const LogInModal = ({ modalState, closeLogInModal }) => {
    if (!modalState) {
        return null;
    }

    return (
        <>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <ActiveWorkspaceListContainer />
                <Link onClick={closeLogInModal} to={`/signin`}><i className="fas fa-plus"></i>Sign into Another Workspace</Link>
                <Link onClick={closeLogInModal} to={`/get-started`}><i className="fab fa-slack"></i>Create Workspace</Link>
            </div>
            <div className="modal-background" onClick={closeLogInModal}>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    modalState: state.ui.logInModal
})

const mapDispatchToProps = dispatch => ({
    closeLogInModal: () => dispatch(closeLogInModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInModal)