import React from "react";
import { Link } from "react-router-dom";

const ChannelsNavBar= ({channels, handleAddChannel}) => {
    
    const channelsIndex = [];
    channels.forEach((channel) => {
        channelsIndex.push(
            <li key={channel.id}><Link to={`/channels/${channel.id}`}><i className="fas fa-hashtag"></i> {channel.name}</Link></li>
        )
    })
    return (
        <div className="channels-nav-bar">
            <div>Channels</div>
            <ul className="channels-index">
                {channelsIndex}
            </ul>
            <button onClick={handleAddChannel}><i className="fas fa-plus"></i> Add a channel</button>
        </div>
    )
}

export default ChannelsNavBar;