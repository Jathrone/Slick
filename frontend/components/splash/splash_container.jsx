import React from "react";
import { connect } from "react-redux";
import Splash from "./splash";
import { openLogInModal } from "../../actions/log_in_modal_actions";
import LogInModal from "./log_in_modal";
import { fetchWorkspacesIdsFromUsersIds } from '../../reducers/modal_selectors';

// #TODO ask why state.session.allCurrentUsersIds !== []
const mapStateToProps = (state) => {
    return {
        loggedIn: !(state.session.allCurrentUsersIds.length === 0),
        allActiveWorkspacesIds: fetchWorkspacesIdsFromUsersIds(state)
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchWorkspace: (workspaceId) => dispatch(fetchWorkspace(workspaceId)),
    yourWorkspacesButton: (
        <div className="splash-modal-button-container">
            <button onClick={() => dispatch(openLogInModal())} className="splash-modal-button">Your Workspaces</button>
            <LogInModal />
        </div>
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
