import React from 'react'
import s from './../Chat.module.css'
import Dialog from "./Dialog";

class Dialogs extends React.Component{
    render(){
        return(<div className={s.dialogs}>
            <Dialog/>
            <Dialog/>
            <Dialog/>
            <Dialog/>
            <Dialog/>
        </div>
        )
    }
}

export default Dialogs