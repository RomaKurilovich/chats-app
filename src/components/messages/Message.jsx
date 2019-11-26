import React, { Component } from 'react'
import style from './Messages.module.css'
import oneCheck from './check-symbol.svg'
import doubleCheck from './double-tick-indicator.svg'

class Message extends Component {
    state = {
        isActivated: false
    };
    toggle = () => {
        let toggle = !this.state.isActivated;
        this.setState({ isActivated: toggle })
    };
    render() {
        let checkType = this.props.message.isMessageRead ? doubleCheck : oneCheck;
        return (<div className={style.fullMessage + " " + (this.props.message.authorId == this.props.currentDialogId ? style.interlocuterMessage : style.myMessage)}>
            <div className={style.message}>
                {this.props.message.authorId == this.props.currentDialogId && <div><img src={this.props.photo === null ? "https://ptetutorials.com/images/user-profile.png" : this.props.photo}></img></div>}
                <div>
                    <div className={style.body}>{this.props.message.body}</div>
                    <div className={style.date}>{this.props.message.date}</div>
                </div>

            </div>
        </div>
        )
    }
}

export default Message