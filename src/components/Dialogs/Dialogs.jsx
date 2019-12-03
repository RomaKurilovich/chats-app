import React from 'react'
import style from './Dialog.module.css'
import Dialog from "./Dialog";
import Preloader from "../../assets/preloader/Preloader";
import Header from '../header/Header';
import FoundDialog from './FoundDialog';

class Dialogs extends React.Component{
    state ={
        value: ''
    }
    updateValueForDialogs = (newValue) => {
        this.setState({value: newValue})
    }
    

    render(){
        let Dialogs = this.props.dialogs.map(d=>{
            if (!d.isHidden) {
                return <Dialog setDialogId={this.props.setDialogId} 
                setInterlocuterPhoto={this.props.setInterlocuterPhoto} 
                setInterlocuterName={this.props.setInterlocuterName}
                dialog={d}/>
            }
        }); 
        if (this.props.foundDialogs.length > 0){
        var foundDialogs = this.props.foundDialogs.map(d => {
            return <FoundDialog setDialogId={this.props.setDialogId} updateValueForDialogs={this.updateValueForDialogs} addNewDialogs={this.props.addNewDialogs} dialog={d}/>
        })}
        if (!this.props.dialogs[0]){
            return <Preloader/>
        }
        return(<div className={style.allDialogs}>
            <Header updateFoundDialogs={this.props.updateFoundDialogs} updateValueForDialogs={this.updateValueForDialogs}/>
                {((this.state.value.length > 0 ) && (foundDialogs !== undefined)) ? foundDialogs : Dialogs}
        </div>
        )
    }
}

export default Dialogs