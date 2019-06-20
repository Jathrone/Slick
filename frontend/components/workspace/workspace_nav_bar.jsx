import React from "react";
import { Link } from "react-router-dom";
import ChannelsNavBar from "./channels_nav_bar";
import DirectMessagesNavBar from "./direct_messages_nav_bar";
import WorkspaceSessionModal from "./workspace_session_modal";

const workspaceNavBar = (props) => {
    const {currentUser, currentWorkspace, channels, handleAddChannel, directMessages, handleAddDirectMessage, openWorkspaceModal} = props
    const currentWorkspaceInfo = currentWorkspace ? <h1 className="current-workspace-name">{currentWorkspace.name}</h1> : <h1 className="current-workspace-name">not found</h1>
    return (
        <nav className="workspace-nav-bar">
            <div className="current-session-info" onClick={openWorkspaceModal}>
                { currentWorkspaceInfo }
                <h2 className="current-user-name"><i className="far fa-circle"></i> {currentUser.displayName}</h2>
            </div>
            <WorkspaceSessionModal currentUser={currentUser} currentWorkspace={currentWorkspace}/>

            <ChannelsNavBar channels={channels} handleAddChannel={handleAddChannel}/>
            <DirectMessagesNavBar directMessages={directMessages} handleAddDirectMessage={handleAddDirectMessage}/>
        </nav>
    )
}

export default workspaceNavBar;