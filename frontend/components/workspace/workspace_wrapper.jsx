import React from "react";
import WorkspaceNavBar from "./workspace_nav_bar_container";
import WorkspaceActiveArea from "./workspace_active_area";
import { Route } from "react-router-dom";

// #TODO should the path be direct-messages or direct_messages?
class WorkspaceWrapper extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRelevantChannels(this.props.currentUser.workspaceId);
        // this.props.fetchRelevantDirectMessages();
    }

    render() {
        const { currentUser, channels } = this.props
        return (
            <div className="workspace-page">
                <WorkspaceNavBar currentUser={currentUser} channels={channels}/>
                <Route 
                    path={["/channels/:parentId", "/direct_messages/:parentId"]} 
                    render={(props) => <WorkspaceActiveArea {...props} currentUser={currentUser}/>}
                /> 
            </div>
        )
    }
}

export default WorkspaceWrapper;