import React from "react";
import ChatItemContainer from "./chat_item_container";
import TimeBucket from "./time_bucket";

class ChatIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messageUnderEdit: null
        }
    }

    render() {
        const chatIndexDisplay = [];
        let timeBucketContent;
        let lastTimestamp = null;
        let lastSenderId = null;

        this.props.messages.forEach((message) => {
            let messageTimestamp = new Date(message.createdAt)
            if (!lastTimestamp || messageTimestamp.toDateString() !== lastTimestamp.toDateString()) {
                if (lastTimestamp) {
                    chatIndexDisplay.push(<TimeBucket key={lastTimestamp.toDateString()} messageTimestamp={lastTimestamp}>
                        {timeBucketContent}
                    </TimeBucket>)
                }
                timeBucketContent = []
                // #TODO allow for more native human process of dates (so-many hours ago, today, yesterday)
            }
            if (this.state.messageUnderEdit === message.id) {
                timeBucketContent.push(<div>placeholder div for messages under edit</div>)
            }
            // else if (message has replies) {
            // #TODO thread messages 
            // } 
            else if (message.senderId !== lastSenderId) {
                timeBucketContent.push(<ChatItemContainer key={message.id} hasMessageHeader={true} message={message} />)
            } else if (!lastTimestamp || (messageTimestamp - lastTimestamp) > 1800000) {
                timeBucketContent.push(<ChatItemContainer key={message.id} hasMessageHeader={true} message={message} />)
            } else {
                timeBucketContent.push(<ChatItemContainer key={message.id} hasMessageHeader={false} message={message} />)
            }
            lastTimestamp = messageTimestamp;
            lastSenderId = message.senderId;
        })
        if (lastTimestamp) {
            chatIndexDisplay.push(<TimeBucket key={lastTimestamp.toDateString()} messageTimestamp={lastTimestamp}>
                {timeBucketContent}
            </TimeBucket>)
        }


        return (
            <div className="workspace-main-chat-list">
                {/* <div className="workspace-main-chat-index-whiteout-left"></div> */}
                {chatIndexDisplay}
                {/* <div className="workspace-main-chat-index-whiteout-right"></div> */}
            </div>
        )

    }
}

export default ChatIndex;
