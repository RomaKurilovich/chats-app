import React from 'react'
import style from './Messages.module.css'
import Message from "./Message";
import send from './../../assets/send-button.svg'
import pen from "../../assets/pencil-edit-button.svg";

class Messages extends React.Component {

    state = {
        value: '',
        id: 0,
        status: 'notWork',

    }

    updateValue = (e) => {
        let newValue = e.currentTarget.value
        this.setState({ value: newValue })
        //this.setState({status: "typing"})
        this.props.isTypingF()
    }

    render() {
        return (
            <div className={style.messagesBlock}>

                {this.props.currentDialogId === null &&
                    <div className={style.choiseChat}>
                        Выберите чат!
                    </div>}

                <div>
                    {this.props.currentDialogId !== null && <div className={style.messages}>
                        {this.props.messages.map(m => {
                            if (this.props.currentDialogId && (m.status != 'deleted-for-me'))
                                return <div><Message message={m} name={this.props.interlocuterName}
                                currentDialogId={this.props.currentDialogId}
                                 photo={this.props.interlocuterPhoto}/></div>
                        })}
                    </div>}

                    <div className={style.form}>
                        <input onChange={this.updateValue} placeholder={'Write a message...'} value={this.state.value} className={style.text} />
                        <button className={style.sendButton} onClick={() => { this.props.sendMessage(this.state.value) }}>
                            Send
                        {this.props.isTyping && <span className={style.pen4ik}><img className={style.pen} src={pen} />Interlocutor is typing...</span>
                            }
                        </button>
                    </div>
                </div>

            </div>

        )
    }
}

export default Messages