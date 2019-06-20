import React from "react";

const ActiveWorkspaceListItem = ({ userId, workspaceName, activateSession, closeLogInModal }) => {
    let workspacePlaceholderLogo = workspaceName.charAt(0).toUpperCase();
    
    const handleClick = () => {
        activateSession(userId);
        closeLogInModal();
    }

    return (
        <li onClick={() => handleClick()}>
            <span className="workspace-logo">{workspacePlaceholderLogo}</span>
            <span>{workspaceName}</span>
        </li>
    )
}

export default ActiveWorkspaceListItem;