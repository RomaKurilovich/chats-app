import React from 'react'
import s from './../Chat.module.css'

const Dialog = (props) => {
  return(
          <div className={s.dialog}>
              <img className={s.photo} src={'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png'}/>
              <div className={s.dialogInfo}>
                  <div>
                      <div>{props.dialog.interLocuterName}</div>
                      <div>{props.dialog.lastMessageBody} </div>
                  </div>
                  <div>
                      <div>{props.dialog.lastMessageData} </div>
                      <div>{!props.dialog.lastMessageIsRead && props.dialog.newMessageCount} </div>
                  </div>
              </div>
          </div>
  )
};

export default Dialog