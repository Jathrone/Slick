import React from "react";
import { Link } from "react-router-dom";

const ChannelsNavBar= ({channels}) => {
    
    const channelsIndex = [];
    channels.forEach((channel) => {
        channelsIndex.push(
            <li key={channel.id}><Link to={`/channels/${channel.id}`}>{channel.name}</Link></li>
        )
    })
    return (
        <div>
            <div>Channels</div>
            <ul>
                {channelsIndex}
            </ul>
        </div>
    )
}

export default ChannelsNavBar;