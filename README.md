# Welcome to Slick!

Slick is a collaboration hub that fosters constructive communication and improves workflow for your team. 

### [Live Demo](https://slick-apps.herokuapp.com)

### Features

+ CRUD functionalities for Workspaces, Channels, Direct Messages, and Messages. Users will communicate more effectively by targeting the right audience. 
+ Live message updates to help you stay up to speed.
+ Search-enabled direct message creation to help you find the users in your workspace faster.

### Technologies
Slick is a single-page slack clone utilizing PostgreSQL, Ruby on Rails, and React.

Other technologies used:
+ Action Cable (Websockets) was utilized to implement the messaging service. 
+ jQuery allowed for API calls for communication between frontend and backend.

### Screenshots

![Create Workspace](https://github.com/Jathrone/Slick/blob/master/app/assets/images/Screen%20Shot%202019-06-24%20at%207.26.43%20AM.png)
![Messages](https://github.com/Jathrone/Slick/blob/master/app/assets/images/Screen%20Shot%202019-06-24%20at%207.20.51%20AM.png)

### Technical Info

#### Chat Message Rendering
Chat messages are handled and rendered in different ways depending on their context, which includes who the sender is, whether the message is part of a group of messages, the date of messages, and whether the message is being edited: 

```js
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
```

## Future Features

+ Message Search
+ Message Notifications