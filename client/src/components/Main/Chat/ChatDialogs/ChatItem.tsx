import React from 'react'

import dialogPhoto from '../../../../assets/user.jpg'

const ChatItem: React.FC = () => {
    return (
        <div className="dialog-item">
            <div className="dialog-item__inner">
                <div className="dialog-item__photo-container">
                    <img className="dialog-item__photo" src={dialogPhoto} alt="dialog"/>
                </div>
                <div className="dialog-item__info">
                    <div className="dialog-item__name">ChatName</div>
                    <div className="dialog-item__message">Lorem message this text...</div>
                </div>
            </div>
        </div>
    )
}

export default ChatItem
