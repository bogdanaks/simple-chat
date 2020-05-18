import React from 'react'

import user from '../../../assets/user.jpg'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar-item sidebar-item--mb-1">
                <div className="sidebar__photo">
                    <a href="/"><img src={user} alt="user"/></a>
                </div>
            </div>

            <div className="sidebar-item sidebar-item--mb-1">
                <div className="sidebar__chat">
                    <a href="/"><img src={user} alt="chat"/></a>
                </div>
            </div>

            <div className="sidebar-item sidebar-item--mb-1">
                <div className="sidebar__settings">
                    <a href="/"><img src={user} alt="settings"/></a>
                </div>
            </div>

            <div className="sidebar-item sidebar-item--last-pos">
                <div className="sidebar__auth">
                    <a href="/"><img src={user} alt="auth"/></a>
               </div>
            </div>

        </div>
    )
}

export default Sidebar
