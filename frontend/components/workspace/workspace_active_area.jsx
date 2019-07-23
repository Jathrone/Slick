import React from "react";
import MainSectionContainer from "./main_section_container";

class WorkspaceActiveArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const reChannels = /channels/;
        const reDirectMessages = /direct_messages/;
        let parentType;
        let displayInfo;
        let parentId = parseInt(this.props.match.params.parentId);
        let parentNotFound;

        if (reChannels.test(this.props.match.url)) {
            parentType = "Channel";
            if (this.props.channels.filter((channel) => (channel.id === parentId))[0]) {
                displayInfo = "#" + this.props.channels.filter((channel) => (channel.id === parentId))[0].name;
            } else {
                parentNotFound=true;
            }
        } else if (reDirectMessages.test(this.props.match.url)) {
            parentType = "DirectMessage";
            if (this.props.directMessages.filter((directMessage) => (directMessage.id === parentId))[0]) {
                displayInfo = this.props.directMessages.filter((directMessage)=> (directMessage.id === parentId))[0].participants.map((participant) => participant ? participant.displayName : "").join(", ")
            } else {
                parentNotFound=true;
            }
        }

        if (parentNotFound) {
            return (
                <div className="workspace-active-area-glitch">
                    <div id="glitch-container">
                        <div id="glitch-warning">
                            <h1 id="glitch-header">There's been a glitch...</h1>
                            <p className="description">We're not quite sure what went wrong. You can go
                            back, or try looking on our <a href="https://github.com/Jathrone/Slick/issues">Help Center</a> if you need a
                            hand.</p>
                            <p className="description">
                                <a href="https://app.slack.com/any404worthyurl">check out Slack's awesome 404 page here</a>
                            </p>
                        </div>
                        <img src="https://a.slack-edge.com/4030/img/404/marrakesh-meadow-80.jpg"></img>
                    </div>
                </div>
            )
        }

        parentType = parentType;
        parentId = parentId;

        
        return (
            <div className="workspace-active-area">

                <div className="workspace-active-nav-bar">
                    <div className="workspace-active-nav-bar-stretch">
                        <div className="display-info">{displayInfo}</div>
                    </div>
                </div>



                <div className="workspace-active-chat-area">
                    <MainSectionContainer parentType={parentType} parentId={parentId} currentUserId={this.props.currentUser.id}/>
                    {/* #TODO here goes side container */}
                </div>
            </div>
        )
    }
};

export default WorkspaceActiveArea;