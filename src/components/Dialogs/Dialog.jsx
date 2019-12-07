import React, {Component} from 'react';
import style from './Dialog.module.css';
import pen from "../../assets/pencil-edit-button.svg";

class Dialog extends Component {

    setDateInterlocuter = (interlocutor) => {
        this.props.setDialogId(interlocutor.id)
        this.props.setInterlocuterPhoto(interlocutor.photo.small)
        this.props.setInterlocuterName(interlocutor.name)
    }

    dateConverter = (date) =>{
        let dayNow = (new Date().getDay())
        let dayWrap = new Date(date).getDay()
        let dateWrap = (new Date(date)).toDateString().slice(4,10)
        if ( dayNow == dayWrap) {
            return 'today'
        } else {
            return dateWrap
        } 
    }

    render() {
        return (
            <div onClick={() => 
                this.setDateInterlocuter(this.props.dialog.interlocutor) 
                } 
                className={style.dialog + " " + 
                ((this.props.dialog.interlocutor.id == this.props.currentDialogId) && style.currentDialog) 
                }>
                <div>
                    <img className={style.photo}
                     src={this.props.dialog.interlocutor.photo.small ? this.props.dialog.interlocutor.photo.small : 'https://ptetutorials.com/images/user-profile.png'}/>
                </div>

                <div className={style.dialogInfo}>
                    <div className={style.dateAndName}>
                        <div className={style.nikName}>{this.props.dialog.interlocutor.name}</div>
                        <div>{this.props.dialog.lastMessage === null ? '' : this.dateConverter(this.props.dialog.lastMessage.date)} </div>
                    </div>

                    <div>
                        { (this.props.isTyping && this.props.dialog.interlocutor.id == this.props.currentDialogId)  ? <div className={style.pen4ik}>
                        <img className={style.pen} src={pen} />Interlocutor is typing...
                        </div> :
                        <div className={style.lastMessage}>{this.props.dialog.lastMessage === null ? 'no message': this.props.dialog.lastMessage.body} </div>}
                        {/*<div>{!this.props.dialog.lastMessage.isRead && this.props.dialog.newMessagesCount} </div>*/}
                    </div>
                </div>

            </div>
        )
    }
}

export default Dialog