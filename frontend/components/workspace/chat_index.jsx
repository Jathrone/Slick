import React from "react";
import ChatItemContainer from "./chat_item_container";
import ChatItemEditForm from "./chat_item_edit_form";
import TimeBucket from "./time_bucket";

class ChatIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messageUnderEdit: null
        }
        this.placeMessageUnderEdit = this.placeMessageUnderEdit.bind(this);
        this.clearMessageUnderEdit = this.clearMessageUnderEdit.bind(this);
    }

    placeMessageUnderEdit(id) {
        this.setState( {
            messageUnderEdit: id
        })
    }

    clearMessageUnderEdit() {
        this.setState({
            messageUnderEdit: null
        })
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
            }
            if (this.state.messageUnderEdit === message.id) {
                timeBucketContent.push(<ChatItemEditForm message={message} updateMessage={(body)=>this.props.updateMessage(message.id, body)} clearMessageUnderEdit={this.clearMessageUnderEdit}/>)
            }
            else if (message.senderId !== lastSenderId) {
                timeBucketContent.push(<ChatItemContainer placeMessageUnderEdit={this.placeMessageUnderEdit} deleteMessage={() => this.props.deleteMessage(message.id)} key={message.id} hasMessageHeader={true} message={message} />)
            } else if (!lastTimestamp || (messageTimestamp - lastTimestamp) > 1800000) {
                timeBucketContent.push(<ChatItemContainer placeMessageUnderEdit={this.placeMessageUnderEdit} deleteMessage={() => this.props.deleteMessage(message.id)} key={message.id} hasMessageHeader={true} message={message} />)
            } else {
                timeBucketContent.push(<ChatItemContainer placeMessageUnderEdit={this.placeMessageUnderEdit} deleteMessage={() => this.props.deleteMessage(message.id)} key={message.id} hasMessageHeader={false} message={message} />)
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
                {chatIndexDisplay}
            </div>
        )

    }
}

export default ChatIndex;
