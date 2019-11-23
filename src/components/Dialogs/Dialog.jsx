import React, {Component} from 'react'
import s from './../Chat.module.css'

class Dialog extends Component {
    render() {
        return (
            <div onClick={() => this.props.setDialogId(this.props.dialog.userId)} className={s.dialog}>
                <img className={s.photo}
                     src={this.props.dialog.interlocutor.photo.small}/>
                <div className={s.dialogInfo}>
                    <div>
                        <div>{this.props.dialog.interlocutor.name}</div>
                        <div>{this.props.dialog.lastMessage.body} </div>
                    </div>
                    <div>
                        <div>{this.props.dialog.lastMessage.date} </div>
                        <div>{!this.props.dialog.lastMessage.isRead && this.props.dialog.newMessagesCount} </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog