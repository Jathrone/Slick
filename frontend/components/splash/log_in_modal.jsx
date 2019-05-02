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
                <Link to={`/signin`}>Sign into Another Workspace</Link>
                <br/>
                <Link to={`/get-started`}>Create Workspace</Link>
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