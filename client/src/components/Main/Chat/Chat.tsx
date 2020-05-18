import React from 'react'

import ChatDialogs from './ChatDialogs/ChatDialogs'

import './Chat.scss'

const Chat: React.FC = () => {
    return (
        <div className="chat-wrapper">
            <ChatDialogs />
            <div className="messages"></div>
        </div>
    )
}

export default Chat
