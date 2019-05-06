import React from "react";
import ChatIndex from "./chat_index";
import ChatForm from "./chat_form";

const MainSection = (props) => {
    const { parentType, parentId, messages, fetchAllMessages, createMessage } = props
    return (
        <>
            <h1>{parentType}, {parentId}</h1>
            <ChatIndex messages={messages} fetchAllMessages={fetchAllMessages}/>
            <ChatForm createMessage={createMessage}/>
        </>
    )
}

export default MainSection