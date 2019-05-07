import React from "react";
import { Link } from "react-router-dom";

const workspaceNavBar = ({currentUser}) => {

    return (
        <nav className="workspace-nav-bar">
            <p>{currentUser.displayName}</p>
            <ul>
                <li><Link to="/channels/1">Channel 1</Link></li>
                <li><Link to="/channels/2">Channel 2</Link></li>
            </ul>
        </nav>
    )
}

export default workspaceNavBar;