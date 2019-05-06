import React from "react";

class ChatIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllMessages("channel", 1) //#TODO for now there is only one channel
    }

    render() {
        debugger
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