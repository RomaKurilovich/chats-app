import React, {Component} from 'react'
import style from './Dialog.module.css'

class Dialog extends Component {
    setDateInterlocuter = (interlocutor) => {
        this.props.setDialogId(interlocutor.id)
        this.props.setInterlocuterPhoto(interlocutor.photo.small)
        this.props.setInterlocuterName(interlocutor.name)
    }
    render() {
        return (
            <div onClick={() => this.setDateInterlocuter(this.props.dialog.interlocutor)} className={style.dialog}>
                <div>
                    <img className={style.photo}
                     src={this.props.dialog.interlocutor.photo.small ? this.props.dialog.interlocutor.photo.small : 'https://ptetutorials.com/images/user-profile.png'}/>
                </div>

                <div className={style.dialogInfo}>
                    <div className={style.dateAndName}>
                        <div className={style.nikName}>{this.props.dialog.interlocutor.name}</div>
                        <div>{this.props.dialog.lastMessage === null ? '' : this.props.dialog.lastMessage.date} </div>
                    </div>

                    <div>
                        
                        <div className={style.lastMessage}>{this.props.dialog.lastMessage === null ? 'no message': this.props.dialog.lastMessage.body} </div>
                        {/*<div>{!this.props.dialog.lastMessage.isRead && this.props.dialog.newMessagesCount} </div>*/}
                    </div>
                </div>

            </div>
        )
    }
}

export default Dialog