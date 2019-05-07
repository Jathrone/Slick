import React from "react";
import ChatIndex from "./chat_index";
import ChatForm from "./chat_form";

class MainSection extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const {parentType, parentId} = this.props;

        this.props.fetchAllMessages()
        
        App.mainChatSubscription = App.cable.subscriptions.create(
            {channel: "ChatChannel",
            parent_type: parentType,
            parent_id: parentId},
            {
                received: data => {
                    this.props.receiveMessage(data);
                }
            }
        );
    }

    componentDidUpdate(prevProps) {
        if ((this.props.parentType !== prevProps.parentType) || (this.props.parentId !== prevProps.parentId)) {

            // #TODO go in and remove all messages from the last main section

            const { parentType, parentId } = this.props;

            this.props.fetchAllMessages()

            App.cable.subscriptions.remove(App.mainChatSubscription);
            
            App.mainChatSubscription = App.cable.subscriptions.create(
                {channel: "ChatChannel",
                parent_type: parentType,
                parent_id: parentId},
                {
                    received: data => {
                        this.props.receiveMessage(data);
                    }
                }
            );
        }
    }

    componentWillUnmount() {
        App.cable.subscriptions.remove(App.mainChatSubscription);
    }
 
    render () {
        const { messages, createMessage } = this.props
        return (
            <div className="workspace-main-section">
                <ChatIndex messages={messages}/>
                <ChatForm createMessage={({body}) => createMessage(body)}/>
            </div>
        )
    }
}

export default MainSection