import React from 'react'
import s from './../Chat.module.css'
import Message from "./Message";

class Messages extends React.Component{
    render(){
    debugger
        return(
            <div className={s.messages}>
                {this.props.messages.map(m => {
                    if(this.props.currentDialogId)
                        return <Message message={m}/>

                })}
            </div>
        )
    }
}

export default Messages