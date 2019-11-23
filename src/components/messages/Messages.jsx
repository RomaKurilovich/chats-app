import React from 'react'
import s from './../Chat.module.css'
import Message from "./Message";

class Messages extends React.Component{
    render(){
        let messages = this.props.messages.map(m=>{
            return <Message message={m}/>
        });
        return(
            <div className={s.messages}>
                {messages}
            </div>
        )
    }
}

export default Messages