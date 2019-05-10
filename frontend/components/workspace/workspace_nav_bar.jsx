import React from "react";
import { Link } from "react-router-dom";
import ChannelsNavBar from "./channels_nav_bar";

const workspaceNavBar = (props) => {
    const {currentUser, channels, handleAddChannel} = props

    return (
        <nav className="workspace-nav-bar">
            <p>{currentUser.displayName}</p>
            <ChannelsNavBar channels={channels} handleAddChannel={handleAddChannel}/>
        </nav>
    )
}

export default workspaceNavBar;