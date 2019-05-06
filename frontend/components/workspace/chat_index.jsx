import React from "react";

class ChatIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllMessages()
    }

    render() {
        return (
            <ul>
                {this.props.messages.map((message) => (
                    <li key={message.id}>{message.body}</li>
                ))}
            </ul>
        )

    }
}

export default ChatIndex;