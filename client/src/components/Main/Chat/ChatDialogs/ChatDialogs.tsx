import React from 'react'

import ChatSearch from './ChatSearch'
import ChatItem from './ChatItem'

const ChatDialogs: React.FC = () => {
    return (
        <div className="dialogs">
            <ChatSearch />
            <div className="dialog-items">
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
            </div>
        </div>
    )
}

export default ChatDialogs
