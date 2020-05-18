import React from 'react'

import ChatDialogs from './ChatDialogs/ChatDialogs'
import ChatMessages from './ChatMessages/ChatMessages'

import './Chat.scss'

const Chat: React.FC = () => {
    return (
        <div className="chat-wrapper">
            <ChatDialogs />
            <ChatMessages />
        </div>
    )
}

export default Chat
