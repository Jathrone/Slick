import React from "react";
import {closeWorkspaceModal} from "../../actions/workspace_session_modal_actions";
import {logout} from "../../actions/session_actions";
import { activateSession } from "../../actions/session_actions";
import {connect} from "react-redux";
import { currentUserIdAndWorkspaceNames } from "../../reducers/modal_selectors";

class WorkspaceSessionModal extends React.Component{
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut() {
        this.props.logout();
        this.props.closeWorkspaceModal();
    }

    handleSwitch(userId) {
        this.props.activateSession(userId);
    }

    render() {
        if (!this.props.modalState) {
            return null;
        }
        return (
            <>
                <div className="modal-background" onClick={this.props.closeWorkspaceModal}>
                </div>

                <div className="workspace-session-modal-child" onClick={e => e.stopPropagation()}>
                    <div className="useful-section">
                        <div className="header-section">
                            <i key="icon" className="fas fa-th-large"></i>
                            <h1>{this.props.currentUser.displayName}</h1>
                        </div>
                        <ul>
                            <li>Set yourself to away</li>
                            <li>{"Help & feedback"}</li>
                        </ul>
                    </div>
                    <div className="useful-section">
                        <div className="header-section">
                            <i key="icon" className="fas fa-th-large"></i>
                            <h1>{this.props.currentWorkspace.name}</h1>
                        </div>
                        <ul>
                            <li onClick={this.handleLogOut}>{`Sign out of ${this.props.currentWorkspace.name}`}</li>
                        </ul>
                    </div>
                    <div className="useful-section">
                        <ul>
                            {this.props.otherActiveWorkspaces.map((workspace)=> {
                                if (workspace.userId !== this.props.currentUser.id) {
                                    return (
                                        <li 
                                        key={workspace.userId}
                                        onClick={() => this.handleSwitch(workspace.userId)}>
                                                Switch to <strong>{workspace.workspaceName}</strong>
                                        </li>
                                    )
                                }
                            })}
                            <li>Sign in to another workspace</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
} 

const mapStateToProps = (state) => ({
    modalState: state.ui.workspaceSessionModal,
    otherActiveWorkspaces: currentUserIdAndWorkspaceNames(state)
});

const mapDispatchToProps = dispatch => ({
    closeWorkspaceModal: () => dispatch(closeWorkspaceModal()),
    logout: () => dispatch(logout()),
    activateSession: (userId) => dispatch(activateSession(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceSessionModal);