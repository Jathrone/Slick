import React from "react";
import MainSectionContainer from "./main_section_container";

const WorkspaceActiveArea = (props) => {
    const reChannels = /channels/;
    const reDirectMessages = /direct_messages/;
    let parentType;
    if (reChannels.test(props.match.url)) {
        parentType = "Channel";
    } else if (reDirectMessages.test(props.match.url)) {
        parentType = "DirectMessage";
    }
    let parentId = parseInt(props.match.params.parentId);

    return (
        <div className="workspace-active-area">
            <div className="workspace-active-nav-bar">chatType: {parentType}, chatId: {parentId}</div>
            <div className="workspace-active-chat-area">
                <MainSectionContainer parentType={parentType} parentId={parentId}/>
                {/* #TODO here goes side container */}
            </div>
        </div>
    )
}

export default WorkspaceActiveArea;