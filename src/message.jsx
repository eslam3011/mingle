import React from "react";
import './Message.css'
const Message = ({classnam, body}) => {

    return (
        <div className={classnam}>
            <div className="message">{body}</div>

        </div>
    )
}

export default Message