import React from 'react'
import s from './../Chat.module.css'
import Message from "./Message";
import send from './../../assets/send-button.svg'
import pen from "../../assets/pencil-edit-button.svg";

class Messages extends React.Component{

    state = {
        value: '', 
        id: 0,
        status: 'notWork'
        
    }

    updateValue = (e) => {
        let newValue = e.currentTarget.value
        this.setState({value: newValue})
        //this.setState({status: "typing"})
        this.props.isTyping(this.state.id)
    }

    componentDidMount(){
    
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
            { this.props.writeMeId === this.state.id  && <div>
                 <span className={s.pen4ik}><img className={s.pen} src={pen}/>Interlocutor is typing...</span>
            </div>}
                <div className={s.form}>
                    <textarea onChange={this.updateValue} placeholder={'Write a message...'} value={this.state.value} className={s.text}/>
                    <button className={s.sendButton} onClick={()=>{this.props.sendMessage(this.state.value); this.setState({status: "notWork"})}}>Send</button>
                </div>
            </div>

        )
    }
}

export default Messages