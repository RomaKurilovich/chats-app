import React, {Component} from 'react'
import s from './../Chat.module.css'

class Dialog extends Component {
    render() {
        return (
            <div onClick={() => this.props.setDialogId(this.props.dialog.userId)} className={s.dialog}>
                <img className={s.photo}
                     src={'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png'}/>
                <div className={s.dialogInfo}>
                    <div>
                        <div>{this.props.dialog.interLocuterName}</div>
                        <div>{this.props.dialog.lastMessageBody} </div>
                    </div>
                    <div>
                        <div>{this.props.dialog.lastMessageData} </div>
                        <div>{!this.props.dialog.lastMessageIsRead && this.props.dialog.newMessageCount} </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog