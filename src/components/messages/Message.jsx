import React from 'react'
import s from './Messages.module.css'
import oneCheck from './check-symbol.svg'
import doubleCheck from './double-tick-indicator.svg'

const Message = (props) => {
    debugger
    let checkType = props.message.isMessageRead? doubleCheck:oneCheck;
    return (
        <div className={s.message + " " + ((props.message.authorId == 123)?s.my:s.his)}>
            <span className={s.body}>{props.message.body}</span>
            <span className={s.date}>{props.message.date}</span>
            { (props.message.authorId == 123) && <span className={s.check}><img className={s.icon} src={checkType}/></span>}
        </div>
    )
};

export default  Message