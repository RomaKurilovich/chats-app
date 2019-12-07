import React from 'react';
import style from './Notification.module.css'

class Notification extends React.Component {
    state = {

    }
    render(){
        return (
            <div className={style.notification}>
                <div>
                    <div className={style.header}>

                    </div>

                    <div className={style.body}>
                        <div>
                            <img></img>
                        </div>
                        <div>
                            <span>Name</span>
                            <div>
                                Text message
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Notification
