import React from 'react'
import load from './../Eclipse-1s-200px.svg'
import s from './../../components/Chat.module.css'

const Preloader = () => {
    return(
    <div className={s.preloader}>
        <img src={load}/>
    </div>
    )
};

export default Preloader