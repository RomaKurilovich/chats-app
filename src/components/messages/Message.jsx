import React from 'react'
import s from './Messages.module.css'

const Message = (props) => {
    debugger
    return (
        <div className={s.message + " " + ((props.message.authorId == 123)?s.my:s.his)}>
            <span className={s.body}>{props.message.authorId}</span>
            <span className={s.date}>{props.message.date}</span>
        </div>
    )
};

export default  Message