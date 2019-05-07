import React from "react";
import MainSectionContainer from "./main_section_container"; 
import WorkspaceNavBarContainer from "./workspace_nav_bar_container";
import WorkspaceActiveArea from "./workspace_active_area";
import { Route } from "react-router-dom";

// #TODO should the path be direct-messages or direct_messages?
const WorkspaceWrapper = () => (
    <div className="workspace-page">
        <WorkspaceNavBarContainer/>
        <Route path={["/channels/:parentId", "/direct_messages/:parentId"]} component={WorkspaceActiveArea} /> 
    </div>
);
export default WorkspaceWrapper;