import React, { Component } from 'react'
import style from './Messages.module.css'


class Message extends Component {
    dateConverter = (date) =>{
        let time = (new Date(date)).toTimeString().slice(0, 5)
        let dateWrap = (new Date(date)).toDateString().slice(4,10)
    return (`${time} | ${dateWrap}`)
    }
    render() {
        return (
        <div className={style.fullMessage + " " + (this.props.message.authorId == this.props.currentDialogId ? style.interlocuterMessage : style.myMessage)}>
            <div className={style.message}>
                {this.props.message.authorId == this.props.currentDialogId && <div><img src={this.props.photo === null ? "https://ptetutorials.com/images/user-profile.png" : this.props.photo}></img></div>}
                <div>
                    <p className={style.body}>{this.props.message.body}</p>
                    <div className={style.date}>{this.dateConverter(this.props.message.date)}</div>
                </div>

            </div>
        </div>
        )
    }
}

export default Message