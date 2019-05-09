// import React from "react";
// import Moment from "react-moment";

// const TimeBucket = (props) => {

//     return (
//         <ul className="workspace-main-chat-timestamp-bucket">
//             <div><Moment date={props.messageTimestamp} format='dddd, MMMM Do YYYY' /></div>
//             {props.children}
//         </ul>
//     )
// }

// export default TimeBucket;

import React from "react";
import Moment from "react-moment";

const TimeBucket = (props) => {

    return (
        <>
            <ul className="workspace-main-chat-timestamp-bucket">
                <div className="scrollable-timestamp">
                <div className="technically-relatively"><div className="scrollable-timestamp-before"></div></div>
                <Moment date={props.messageTimestamp} format='dddd, MMMM Do YYYY' />
                <div className="technically-relatively"><div className="scrollable-timestamp-after"></div></div>
                </div>
                {props.children}
            </ul>
        </>
    )
}

export default TimeBucket;