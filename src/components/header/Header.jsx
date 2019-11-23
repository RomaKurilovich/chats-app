import React from 'react'
import s from './Header.module.css'

class Header extends React.Component{
    render(){
        return(
            <div className={s.outer}>
                <div className={s.title}>
                    Chat App
                </div>
            </div>
        )
    }
}

export default Header