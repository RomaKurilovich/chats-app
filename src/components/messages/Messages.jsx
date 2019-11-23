import React from 'react'
import s from './../Chat.module.css'
import Message from "./Message";

class Messages extends React.Component{
    render(){
    debugger
        return(
            <div>
            <div className={s.messages}>
                {this.props.messages.map(m => {
                    if(this.props.currentDialogId)
                        return <Message message={m}/>
                })}
                {messages}
            </div>
                <div className={s.form}>
                    <textarea placeholder={'Write a message...'} className={s.text}/>
                    <button className={s.sendButton}>Send</button>
                </div>
            </div>

        )
    }
}

export default Messages