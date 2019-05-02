import React from "react";
import ActiveWorkspaceListItem from "./active_workspace_list_item";

const ActiveWorkspaceList = ({ currentUserIdAndWorkspaceNames, activateSession}) => {

    return (
        <ul>
            {currentUserIdAndWorkspaceNames.map(({userId, workspaceName})=>(
                <ActiveWorkspaceListItem key={userId} userId={userId} workspaceName={workspaceName} activateSession={activateSession} />
            ))}
        </ul>
    )
}

export default ActiveWorkspaceList;