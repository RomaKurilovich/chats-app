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
                return <Dialog setDialogId={this.props.setDialogId} 
                setInterlocuterPhoto={this.props.setInterlocuterPhoto} 
                setInterlocuterName={this.props.setInterlocuterName}
                isTyping={this.props.isTyping}
                currentDialogId={this.props.currentDialogId}
                dialog={d}/>     
        });
        let foundDialogs = this.props.foundDialogs.map(d => {
            return <FoundDialog setDialogId={this.props.setDialogId} 
            updateValueForDialogs={this.updateValueForDialogs} 
            addNewDialogs={this.props.addNewDialogs} 
            dialog={d}/>
        });
        

        return (<div className={style.dialogs , (!this.props.dialogs[0] && style.waitDialogs )}>
            <div>
                <Header updateFoundDialogs={this.props.updateFoundDialogs} value={this.state.value} updateValueForDialogs={this.updateValueForDialogs}/>
            </div>

            { this.props.dialogs[0] ? <div className={style.allDialogs}>
                 {((this.state.value.length > 0 ) && (foundDialogs !== undefined)) ? foundDialogs : Dialogs}
            </div> :
            <div className={style.preloader}>
              <Preloader/> 
            </div>}
        </div>
        )}
}

export default Dialogs