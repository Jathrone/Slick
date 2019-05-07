import React from "react";
import ChatIndex from "./chat_index";
import ChatForm from "./chat_form";
// import ChatToggler from "./chat_toggler";

class MainSection extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const parentType = this.props.parentType;
        const parentId = this.props.parentId;
        this.props.fetchAllMessages(parentType, parentId)
        
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

            const parentType = this.props.parentType;
            const parentId = this.props.parentId;
            this.props.fetchAllMessages(parentType, parentId)

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
        const { senderId, parentType, parentId, messages, createMessage, toggleMainWorkspace } = this.props
        return (
            <div className="workspace-main-section">
                {/* <ChatToggler toggleMainWorkspace={toggleMainWorkspace} parentType={parentType} parentId={parentId}/> */}
                <ChatIndex messages={messages}/>
                <ChatForm createMessage={({body}) => createMessage(senderId, body)}/>
            </div>
        )
    }
}

export default MainSection