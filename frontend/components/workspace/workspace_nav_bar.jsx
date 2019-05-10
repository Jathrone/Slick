import React from "react";
import { Link } from "react-router-dom";
import ChannelsNavBar from "./channels_nav_bar";
import DirectMessagesNavBar from "./direct_messages_nav_bar";

const workspaceNavBar = (props) => {
    const {currentUser, currentWorkspace, channels, handleAddChannel, directMessages, handleAddDirectMessage} = props
    return (
        <nav className="workspace-nav-bar">
            {/* <p>{currentUser.displayName}</p> */}
            <div className="current-session-info">
                <h1 className="current-workspace-name">{currentWorkspace.name}</h1>
                <h2 className="current-user-name"><i className="far fa-circle"></i> {currentUser.displayName}</h2>
            </div>

            <ChannelsNavBar channels={channels} handleAddChannel={handleAddChannel}/>
            <DirectMessagesNavBar directMessages={directMessages} handleAddDirectMessage={handleAddDirectMessage}/>
        </nav>
    )
}

export default workspaceNavBar;