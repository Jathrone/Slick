import React from "react";
import { connect } from "react-redux";
import Splash from "./splash";
import { openLogInModal } from "../../actions/log_in_modal_actions";
import LogInModal from "./log_in_modal";
import { signInDemoUser } from "../../actions/session_actions";

// #TODO ask why state.session.allCurrentUsersIds !== []
const mapStateToProps = (state) => {
    return {
        loggedIn: !(state.session.allCurrentUsersIds.length === 0)
    };
}

const mapDispatchToProps = (dispatch) => ({
    yourWorkspacesButton: (
        <div className="splash-modal-button-container">
            <button onClick={() => dispatch(openLogInModal())} className="splash-modal-button">Your Workspaces</button>
            <LogInModal />
        </div>
    ),
    signInDemoUser: () => dispatch(signInDemoUser()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
