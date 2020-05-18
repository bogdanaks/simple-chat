import React from 'react'

import dialogPhoto from '../../../assets/user.jpg'
import './Chat.scss'

const Chat: React.FC = () => {
    return (
        <div className="chat-wrapper">
            <div className="dialogs">
                <div className="dialogs__search-inner">
                    <input className="dialogs__search-input" type="text" placeholder="Поиск"/>
                </div>
                <div className="dialog-items">
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
                </div>
            </div>
            <div className="messages"></div>
        </div>
    )
}

export default Chat
