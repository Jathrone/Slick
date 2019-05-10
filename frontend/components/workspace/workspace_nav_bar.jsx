import React from "react";
import { Link } from "react-router-dom";
import ChannelsNavBar from "./channels_nav_bar";
import DirectMessagesNavBar from "./direct_messages_nav_bar";

const workspaceNavBar = (props) => {
    const {currentUser, channels, handleAddChannel, directMessages, handleAddDirectMessage} = props
    return (
        <nav className="workspace-nav-bar">
            <p>{currentUser.displayName}</p>
            <ChannelsNavBar channels={channels} handleAddChannel={handleAddChannel}/>
            <DirectMessagesNavBar directMessages={directMessages} handleAddDirectMessage={handleAddDirectMessage}/>
        </nav>
    )
}

export default workspaceNavBar;