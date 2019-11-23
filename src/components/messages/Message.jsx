import React, {Component} from 'react'
import s from './Messages.module.css'
import oneCheck from './check-symbol.svg'
import doubleCheck from './double-tick-indicator.svg'

class Message extends Component {
    state = {
        isActivated: false
    };
    toggle = () => {
        let toggle = !this.state.isActivated;
        this.setState({isActivated: toggle})
    };
    render() {
        let checkType = this.props.message.isMessageRead ? doubleCheck : oneCheck;
        return (
            <div className={s.message + " " + ((this.props.message.authorId == 'fakeID') ? s.my : s.his)}>
                <div className={s.messageBox} onDoubleClick={this.toggle}>
                <span className={s.body}>{this.props.message.body}</span>
                <span className={s.date}>{this.props.message.date}</span>
                {(this.props.message.authorId == 123) &&
                <span className={s.check}><img className={s.icon} src={checkType}/></span>}
                </div>
                {this.state.isActivated
                &&<div>
                <div>Delete message for me</div>
                    <div>Delete message for interlocutor</div>
                    <div>Delete message for everyone</div>
                    </div>}
            </div>
        )
    }
}

export default Message