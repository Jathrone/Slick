import React from "react";
import Moment from "react-moment";

class ChatItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const messageTimestamp = new Date(this.props.message.createdAt)

        const toUpperCaseFilter = (d) => {
            return d.toUpperCase();
        };

        let chatItemClassName=""
        let chatItemGutter = [];
        let chatItemBody = [];
        chatItemBody.push(<pre key="message">{this.props.message.body}</pre>);
        if (this.props.hasMessageHeader) {
            chatItemClassName="chat-item-header"
            chatItemGutter.push(<i key="icon" className="fas fa-th-large"></i>);
            chatItemBody.unshift(<span key="messageHeader" className="message-header">{this.props.sender.displayName} <Moment date={messageTimestamp} filter={toUpperCaseFilter} format='h:mm a' /></span>);
        } else {
            chatItemGutter.push(<span key="gutterTimestamp"><Moment date={messageTimestamp} filter={toUpperCaseFilter} format='h:mm a'/></span>); 
        }
        return (
            <li className={`chat-item ${chatItemClassName}`}>    
                <div className="chat-item-gutter">
                    {chatItemGutter}
                </div>
                <div className="chat-item-body">
                    {chatItemBody}
                </div>
            </li>
        )
    }
}

export default ChatItem;