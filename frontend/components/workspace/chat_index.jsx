import React from "react";

class ChatIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <ul className="workspace-main-chat-list">
                {this.props.messages.map((message) => (
                    <li key={message.id}>{message.body}</li>
                ))}
            </ul>
        )

    }
}

export default ChatIndex;