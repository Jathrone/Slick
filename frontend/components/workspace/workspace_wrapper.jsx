import React from "react";
import WorkspaceNavBar from "./workspace_nav_bar_container";
import WorkspaceActiveArea from "./workspace_active_area";
import AddChannelForm from "./add_channel_form";
import AddDirectMessageForm from "./add_direct_message_form";
import { Route, Redirect, Switch } from "react-router-dom";

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
        this.handleAddDirectMessage = this.handleAddDirectMessage.bind(this);
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

    handleAddDirectMessage() {
        this.setState({
            activeArea: "addDirectMessage"
        })
    }

    handleResetActiveArea() {
        this.setState({
            activeArea: "chat"
        })
    }

    componentDidMount() {
        this.props.fetchRelevantUsers(this.props.currentUser.workspaceId);
        this.props.fetchRelevantChannels(this.props.currentUser.workspaceId);
        this.props.fetchRelevantDirectMessages();
        // this.props.fetchRelevantDirectMessages();
    }

    componentWillUpdate(nextProps) {
        if (nextProps.currentUser.id !== this.props.currentUser.id) {
            this.props.history.push("/");
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser.id !== this.props.currentUser.id) {
            this.props.fetchRelevantUsers(this.props.currentUser.workspaceId);
            this.props.fetchRelevantChannels(this.props.currentUser.workspaceId);
            this.props.fetchRelevantDirectMessages();
        }
    }

    render() {
        const { currentUser, channels, createChannel, directMessages, allUsers, createDirectMessage } = this.props;
        const redirectComponent = []
        if (channels.length > 0) {
            redirectComponent.push(<Redirect key={channels[0].id} to={`/channels/${channels[0].id}`}/>)
        }
        if (this.state.activeArea === "chat") {
            return (
                <div className="workspace-page">
                    <WorkspaceNavBar 
                        currentUser={currentUser} 
                        channels={channels} 
                        handleAddChannel={this.handleAddChannel} 
                        directMessages={directMessages}
                        handleAddDirectMessage={this.handleAddDirectMessage}/>
                    <Switch>
                        <Route 
                            path={["/channels/:parentId", "/direct_messages/:parentId"]} 
                            render={(props) => <WorkspaceActiveArea {...props} currentUser={currentUser} channels={channels} directMessages={directMessages}/>}
                        /> 
                        {redirectComponent}
                    </Switch>
                </div>
            )
        } else if (this.state.activeArea === "addChannel") {
            return (
                <AddChannelForm 
                    allUsers={allUsers}
                    createChannel={({ name, topic, purpose }) => createChannel(name, currentUser.workspaceId, topic, purpose)}
                    handleResetActiveArea={this.handleResetActiveArea}
                    handleRedirect={this.handleRedirect}/>
            )
        } else if(this.state.activeArea === "addDirectMessage") {
        return (
            <AddDirectMessageForm 
                allUsers={allUsers}
                directMessages={directMessages}
                currentUserId={currentUser.id}
                createDirectMessage={(userIds) => (createDirectMessage(userIds.concat(currentUser.id)))}
                handleResetActiveArea={this.handleResetActiveArea}/>
        )
}
    }
}

export default WorkspaceWrapper;