import React from "react";
import { Link } from "react-router-dom";

const DirectMessagesNavBar = ({directMessages, handleAddDirectMessage}) => {
    const directMessagesIndex =[];
    directMessages.forEach((directMessage) => {
        let displayText = directMessage.participants.map((participant)=> participant ? participant.displayName : "").join(",")
        displayText = ((displayText.length < 20) ? displayText : displayText.slice(0, 17) + "...")
        directMessagesIndex.push(
            <li key={directMessage.id}><Link to={`/direct_messages/${directMessage.id}`}><i className="far fa-circle"></i> {displayText}</Link></li>
        )
    })

    return (
        <div className="direct-messages-nav-bar">
            <div>Direct Messages <button onClick={handleAddDirectMessage}><i className="fas fa-plus"></i></button></div>
            <ul className="direct-messages-index">
                {directMessagesIndex}
            </ul>
        </div>
    )
}

export default DirectMessagesNavBar;