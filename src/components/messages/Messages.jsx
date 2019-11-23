import React from 'react'
import s from './../Chat.module.css'
import Message from "./Message";
import send from './../../assets/send-button.svg'

class Messages extends React.Component{
    render(){
        return(
            <div>
            <div className={s.messages}>
                {this.props.messages.map(m => {
                    if(this.props.currentDialogId && (m.status != 'deleted-for-me'))
                        return <Message message={m}/>
                })}
            </div>
                <div className={s.form}>
                    <textarea placeholder={'Write a message...'} className={s.text}/>
                    <button className={s.sendButton}>
                        <img className={s.send} src={send}/>
                    </button>
                </div>
            </div>

        )
    }
}

export default Messages