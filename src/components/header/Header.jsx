import React from 'react'
import s from './Header.module.css'
import {usersAPI} from './../../api'
import add from './../../assets/add.svg'

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = { 
            value: '' ,
            foundUsers: [],
            foundUserId: null,
        }

        this.updateFoundUsers = (data) => {
            this.setState({ foundUsers: data})
        }
        this.setFoundUser = () => {
            debugger
            let user = this.state.foundUsers.find((u) => u.name === this.state.value)
       //     this.setState({foundUserId: user.id})
            this.props.addNewDialogs(user.id)
        }

        this.onUpdateUserName = (e) =>{
        
        let newValue = e.currentTarget.value;
        this.setState({ value : newValue})
        usersAPI.getUsers(1,10,newValue, this.updateFoundUsers)
        }
    }



    render(){

        return(
            <div className={s.outer}>
                <div className={s.title}>
                    Chat App
                </div>
                <div>
                    <input className={s.inputSearch} placeholder="Inter name..." list="users" onChange={this.onUpdateUserName} value={this.state.value} />
                    <button className={s.addDialogButton} onClick={this.setFoundUser}><img src={add} className={s.add}/></button>
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