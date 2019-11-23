import React from 'react'
import s from './../Chat.module.css'
import Dialog from "./Dialog";

class Dialogs extends React.Component{
    render(){
        let Dialogs = this.props.dialogs.map(d=>{
            return <Dialog dialog={d}/>
        });
        return(<div className={s.dialogs}>
                {Dialogs}
        </div>
        )
    }
}

export default Dialogs