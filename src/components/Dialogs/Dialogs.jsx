import React from 'react'
import style from './Dialog.module.css'
import Dialog from "./Dialog";
import Preloader from "../../assets/preloader/Preloader";

class Dialogs extends React.Component{

    render(){
        let Dialogs = this.props.dialogs.map(d=>{
            if (!d.isHidden) {
                return <Dialog setDialogId={this.props.setDialogId} 
                setInterlocuterPhoto={this.props.setInterlocuterPhoto} 
                setInterlocuterName={this.props.setInterlocuterName}
                dialog={d}/>
            }
        });
        if (!this.props.dialogs[0]){
            return <Preloader/>
        }
        return(<div className={style.allDialogs}>
                {Dialogs}
        </div>
        )
    }
}

export default Dialogs