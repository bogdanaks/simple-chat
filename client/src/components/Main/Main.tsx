import React from 'react'

import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'

import './Main.scss'

const Main = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Main
