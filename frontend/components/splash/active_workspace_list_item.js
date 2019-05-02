import React from "react";

const ActiveWorkspaceListItem = ({ userId, workspaceName, activateSession }) => {
    let workspacePlaceholderLogo = workspaceName.charAt(0).toUpperCase();
    
    return (
        <li onClick={() => activateSession(userId)}>
            <span className="workspace-logo">{workspacePlaceholderLogo}</span>
            <span>{workspaceName}</span>
        </li>
    )
}

export default ActiveWorkspaceListItem;