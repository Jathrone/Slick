import React from "react";
import {closeWorkspaceModal} from "../../actions/workspace_session_modal_actions";
import {logout} from "../../actions/session_actions";
import { activateSession, deactivateSession } from "../../actions/session_actions";
import {connect} from "react-redux";
import { currentUserIdAndWorkspaceNames } from "../../reducers/modal_selectors";
import {Redirect} from "react-router";

class WorkspaceSessionModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleDeactivate =this.handleDeactivate.bind(this);
    }

    handleLogOut() {
        this.props.logout();
        this.props.closeWorkspaceModal();
    }

    handleSwitch(userId) {
        this.props.activateSession(userId);
    }

    handleDeactivate() {
        // this.props.deactivateSession();
        this.props.closeWorkspaceModal();
        this.setState({
            redirect: true
        })
    }

    render() {
        if (!this.props.modalState) {
            return null;
        } else if (this.state.redirect) {
            return (
                <Redirect to={{
                    pathname: "/signin",
                    state: {deactivateSession: this.props.deactivateSession}}}/>
            )
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
                            <li onClick={this.handleDeactivate}>Sign in to another workspace</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
} 

const mapStateToProps = (state) => {
    return ({
    modalState: state.ui.workspaceSessionModal,
    otherActiveWorkspaces: currentUserIdAndWorkspaceNames(state)
    })
};

const mapDispatchToProps = dispatch => ({
    closeWorkspaceModal: () => dispatch(closeWorkspaceModal()),
    logout: () => dispatch(logout()),
    activateSession: (userId) => dispatch(activateSession(userId)),
    deactivateSession: ()=> dispatch(deactivateSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceSessionModal);