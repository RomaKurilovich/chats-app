import React from 'react'
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./messages/Messages";
import s from './Chat.module.css'

const Chat = () => {
    return (
        <div className={s.wrapper}>
            <Dialogs/>
            <Messages/>
        </div>
    )
};


export default Chat
