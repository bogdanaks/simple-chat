import React from 'react'

const ChatMessages: React.FC = () => {
    return (
        <div className="messages">
            <div className="messages__header">
                <div className="messages__header-title">ChatName</div>
                <div className="messages__header-count">243 users</div>
            </div>
        </div>
    )
}

export default ChatMessages
