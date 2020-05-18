import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import user from '../../../assets/user.jpg'
import './Sidebar.scss'

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">

            <div className="sidebar-item">
                <div className="sidebar__photo">
                    <a href="/"><img src={user} alt="user"/></a>
                </div>
            </div>

            <div className="sidebar-item sidebar-item--active">
                <div className="sidebar__chat">
                    <a href="/"><FontAwesomeIcon icon={faCommentDots} /></a>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="sidebar__settings">
                    <a href="/"><FontAwesomeIcon icon={faCog} /></a>
                </div>
            </div>

            <div className="sidebar-item sidebar-item--last-pos">
                <div className="sidebar__auth">
                    <a href="/"><FontAwesomeIcon icon={faSignOutAlt} /></a>
               </div>
            </div>

        </div>
    )
}

export default Sidebar
