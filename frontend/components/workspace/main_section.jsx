import React from "react";
import ChatIndex from "./chat_index";
import ChatForm from "./chat_form";

class MainSection extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        App.cable.subscriptions.create(
            {channel: "ChatChannel"},
            {
                received: data => {
                    this.props.receiveMessage(data);
                }
            }
        )
    }
 
    render () {
        const { parentType, parentId, messages, fetchAllMessages, createMessage } = this.props
        return (
            <>
                <h1>{parentType}, {parentId}</h1>
                <ChatIndex messages={messages} fetchAllMessages={fetchAllMessages} />
                <ChatForm createMessage={createMessage} />
            </>
        )
    }
}

export default MainSection