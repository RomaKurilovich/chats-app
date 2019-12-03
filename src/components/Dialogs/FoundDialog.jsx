import React, {Component} from 'react'
import style from './Dialog.module.css'

class FoundDialog extends Component {

    render() {debugger

        let setCurrentDialog = () => {
            this.props.setDialogId(this.props.dialog.id)
            this.props.addNewDialogs(this.props.dialog.id)
            this.props.updateValueForDialogs('')
        }

        return (
            <div onClick={setCurrentDialog} className={style.dialog}>
                <div>
                    <img className={style.photo}
                     src={this.props.dialog.photos.small !== null ? this.props.dialog.photos.small : 'https://ptetutorials.com/images/user-profile.png'}/>
                </div>

                <div className={style.dialogInfo}>
                    <div className={style.dateAndName}>
                        <div className={style.nikName}>{this.props.dialog.name}</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FoundDialog