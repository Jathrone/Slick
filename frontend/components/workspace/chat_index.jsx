import React from "react";
import ChatItemContainer from "./chat_item_container";
import Moment from "react-moment";

class ChatIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messageUnderEdit: null
        }
    }
    
    render() {
        const chatIndexDisplay = [];
        let lastTimestamp = null;
        let lastSenderId = null;

        const toUpperCaseFilter = (d) => {
            return d.toUpperCase();
        };

        this.props.messages.forEach((message) => {
            let messageTimestamp = new Date(message.createdAt)
            if (!lastTimestamp || messageTimestamp.toDateString() !== lastTimestamp.toDateString()) {
                chatIndexDisplay.push(<li key={messageTimestamp.toDateString()} className="workpace-main-chat-timestamp-separator"><Moment date={messageTimestamp} format='dddd, MMMM Do YYYY' /></li>)
                // #TODO allow for more native human process of dates (so-many hours ago, today, yesterday)
            } 
            if (this.state.messageUnderEdit === message.id) {
                chatIndexDisplay.push(<div>placeholder div for messages under edit</div>)
            } 
            // else if (message has replies) {
                // #TODO thread messages 
            // } 
            else if (message.senderId !== lastSenderId) {
                chatIndexDisplay.push(<ChatItemContainer key={message.id} hasMessageHeader={true} message={message} />)
            } else if (!lastTimestamp || (messageTimestamp - lastTimestamp) > 1800000) {
                chatIndexDisplay.push(<ChatItemContainer key={message.id} hasMessageHeader={true} message={message} />)
            } else {
                chatIndexDisplay.push(<ChatItemContainer key={message.id} hasMessageHeader={false} message={message} />)
            }
            lastTimestamp = messageTimestamp;
            lastSenderId = message.senderId;
        })

        return (
            <ul className="workspace-main-chat-list">
                {chatIndexDisplay}
            </ul>
        )

    }
}

export default ChatIndex;