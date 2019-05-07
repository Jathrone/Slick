import React from "react";
import WorkspaceNavBar from "./workspace_nav_bar_container";
import WorkspaceActiveArea from "./workspace_active_area";
import { Route } from "react-router-dom";

// #TODO should the path be direct-messages or direct_messages?
const WorkspaceWrapper = ({currentUser}) => {
    return (
        <div className="workspace-page">
            <WorkspaceNavBar currentUser={currentUser}/>
            <Route 
                path={["/channels/:parentId", "/direct_messages/:parentId"]} 
                render={(props) => <WorkspaceActiveArea {...props} currentUser={currentUser}/>}
            /> 
        </div>
    )
};
export default WorkspaceWrapper;