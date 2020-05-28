import React from 'react'

import avatar from '../../../../assets/user.jpg'

interface Props {
    num: number
}
const Message: React.FC<Props> = ({num}) => {
    return (
        <div className="messages__inner">
            <div className="messages__photo-container">
                <img className="messages__photo" src={avatar} alt="dialog"/>
            </div>
            <div className="messages__info">
            <div className="messages__name">UserName {num}</div>
                <div className="messages__message">Lorem message this text Lorem message this text Lorem message this text 1111...</div>
            </div>
        </div>
    )
}

export default Message
