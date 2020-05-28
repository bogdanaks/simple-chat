import React from 'react'

import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'

import './Main.scss'

const Main: React.FC = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Main
