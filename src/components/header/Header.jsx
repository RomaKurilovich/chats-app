import React from 'react'
import s from './Header.module.css'
import {usersAPI} from './../../api'

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = { 
            value: '' ,
            foundUsers: []
        }

        this.updateFoundUsers = (data) => {
            this.setState({ foundUsers: data})
        }

        this.onUpdateUserName = (e) =>{
        debugger
        let newValue = e.currentTarget.value;
        this.setState({ value : newValue})
        usersAPI.getUsers(1,10,newValue, this.updateFoundUsers)
        }
    }

    componi

    render(){

        return(
            <div className={s.outer}>
                <div className={s.title}>
                    Chat App
                </div>
                <div>
                    <input className={s.inputSearch} placeholder="Inter name..." list="users" onChange={this.onUpdateUserName} value={this.state.value} />
                    <datalist id="users">
                    {this.state.foundUsers.map((u, index) => {
                        return <option key={index} value={u.name} />
                    })}
                </datalist>
                </div>
            </div>
        )
    }
}

export default Header