import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import Message from './Message'

const ChatMessages: React.FC = () => {
    return (
        <div className="messages">
            <div className="messages__header">
                <div className="messages__header-title">ChatName</div>
                <div className="messages__header-count">243 users</div>
            </div>
            <div className="messages__box">
                <div className="messages__message-items">
                    <Message num={1} />
                    <Message num={2} />
                    <Message num={2} />
                    <Message num={3} />
                    <Message num={4} />
                    <Message num={5} />
                    <Message num={6} />
                    <Message num={7} />
                    <Message num={8} />
                </div>
                <div className="messages__text">
                    <div className="messages__text-input"><input type="text" placeholder="Введите сообщение.."/></div>
                    <div className="messages__text-send"><FontAwesomeIcon icon={faPaperPlane} /></div>
                </div>

            </div>
        </div>
    )
}

export default ChatMessages
