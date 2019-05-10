import React from "react";
import WorkspaceNavBar from "./workspace_nav_bar_container";
import WorkspaceActiveArea from "./workspace_active_area";
import AddChannelForm from "./add_channel_form";
import { Route, Redirect } from "react-router-dom";

// #TODO should the path be direct-messages or direct_messages?
class WorkspaceWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeArea: "chat"
        } 
        // this.handleChannelsSearch = this.handleChannelsSearch.bind(this);
        this.handleAddChannel = this.handleAddChannel.bind(this);
        this.handleResetActiveArea = this.handleResetActiveArea.bind(this);
    }

    // handleChannelsSearch() {
    //     this.setState({
    //         activeArea: "channelsSearch"
    //     })
    // }

    handleAddChannel() {
        this.setState({
            activeArea: "addChannel"
        })
    }

    handleResetActiveArea() {
        this.setState({
            activeArea: "chat"
        })
    }

    componentDidMount() {
        this.props.fetchRelevantChannels(this.props.currentUser.workspaceId);
        // this.props.fetchRelevantDirectMessages();
    }

    render() {
        const { currentUser, channels, createChannel } = this.props
        if (this.state.activeArea === "chat") {
            return (
                <div className="workspace-page">
                    <WorkspaceNavBar currentUser={currentUser} channels={channels} handleAddChannel={this.handleAddChannel}/>
                    <Route 
                        path={["/channels/:parentId", "/direct_messages/:parentId"]} 
                        render={(props) => <WorkspaceActiveArea {...props} currentUser={currentUser}/>}
                    /> 
                </div>
            )
        } else if (this.state.activeArea === "addChannel") {
            return (
                <AddChannelForm 
                    createChannel={({ name, topic, purpose }) => createChannel(name, currentUser.workspaceId, topic, purpose)}
                    handleResetActiveArea={this.handleResetActiveArea}
                    handleRedirect={this.handleRedirect}/>
            )
        }
    }
}

export default WorkspaceWrapper;