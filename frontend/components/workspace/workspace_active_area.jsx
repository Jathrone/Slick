import React from "react";
import MainSectionContainer from "./main_section_container";

class WorkspaceActiveArea extends React.Component {
    constructor(props) {
        super(props);
    }

    // #TODO change back to functional component if cleanup doesn't require componentdidupdate

    render() {

        const reChannels = /channels/;
        const reDirectMessages = /direct_messages/;
        let parentType;
        let displayInfo;
        let parentId = parseInt(this.props.match.params.parentId);
        if (reChannels.test(this.props.match.url)) {
            parentType = "Channel";
            displayInfo= "#" + this.props.channels.filter((channel) =>(channel.id === parentId))[0].name;
        } else if (reDirectMessages.test(this.props.match.url)) {
            parentType = "DirectMessage";
            displayInfo = this.props.directMessages.filter((directMessage)=> (directMessage.id === parentId))[0].participants.map((participant) => participant ? participant.displayName : "").join(", ")
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