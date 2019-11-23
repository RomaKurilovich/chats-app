import React from 'react'
import s from './../Chat.module.css'
import Message from "./Message";

class Messages extends React.Component{

    state = {
        value: '', 
        id: null,
    }

    updateValue = (e) => {
        let newValue = e.currentTarget.value
        this.setState({value: newValue})
    }

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
                    <textarea onChange={this.updateValue} placeholder={'Write a message...'} value={this.state.value} className={s.text}/>
                    <button className={s.sendButton} onClick={()=>this.props.sendMessage(this.state.value)}>Send</button>
                </div>
            </div>

        )
    }
}

export default Messages