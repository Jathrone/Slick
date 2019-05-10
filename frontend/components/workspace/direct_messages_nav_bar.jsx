import React from "react";
import { Link } from "react-router-dom";

const DirectMessagesNavBar = ({directMessages, handleAddDirectMessage}) => {
    const directMessagesIndex =[];
    directMessages.forEach((directMessage) => {
        const displayText = directMessage.participants.map((participant)=> participant ? participant.displayName : "").join(",")
        directMessagesIndex.push(
            <li key={directMessage.id}><Link to={`/direct_messages/${directMessage.id}`}>{displayText}</Link></li>
        )
    })

    return (
        <div>
            <div>Direct Messages</div>
            <button onClick={handleAddDirectMessage}><i className="fas fa-plus"></i></button>
            <ul>
                {directMessagesIndex}
            </ul>
        </div>
    )
}

export default DirectMessagesNavBar;