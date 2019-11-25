import React, {Component} from 'react'
import style from './Dialog.module.css'

class Dialog extends Component {
    render() {debugger
        return (
            <div onClick={() => this.props.setDialogId(this.props.dialog.interlocutor.id)} className={style.dialog}>
                <div>
                    <img className={style.photo}
                     src={this.props.dialog.interlocutor.photo.small ? this.props.dialog.interlocutor.photo.small : 'https://ptetutorials.com/images/user-profile.png'}/>
                </div>

                <div className={style.dialogInfo}>
                    <div className={style.dateAndName}>
                        <div>{this.props.dialog.interlocutor.name}</div>
                        <div>{this.props.dialog.lastMessage === null ? '' : this.props.dialog.lastMessage.date} </div>
                    </div>

                    <div>
                        
                        <div>{this.props.dialog.lastMessage === null ? 'no message': this.props.dialog.lastMessage.body} </div>
                        {/*<div>{!this.props.dialog.lastMessage.isRead && this.props.dialog.newMessagesCount} </div>*/}
                    </div>
                </div>

            </div>
        )
    }
}

export default Dialog