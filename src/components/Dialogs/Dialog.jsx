import React from 'react'
import s from './../Chat.module.css'

const Dialog = (props) => {
  return(

          <div className={s.dialog}>
              <img className={s.photo} src={'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png'}/>
              <div className={s.dialogInfo}>
                  <div>
                      <div>Name </div>
                      <div>message </div>
                  </div>
                  <div>
                      <div>Date </div>
                      <div>count </div>
                  </div>
              </div>
          </div>
  )
};

export default Dialog