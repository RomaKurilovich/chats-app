import React from 'react'
import s from './Header.module.css'
import {usersAPI} from './../../api'

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = { 
            value: '' ,
            foundUsers: [],
            foundUser: {},
        }

        this.updateFoundUsers = (data) => {
            this.setState({ foundUsers: data})
        }
        this.setFoundUser = () => {
            debugger
            let user = this.state.foundUsers.find((u) => u.name === this.state.value)
            this.setState({foundUser: user[0]})
            this.props.addNewDialogs(this.state.foundUser)
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
                    <input onInput={(e)=> console.log(e.currentTarget)} className={s.inputSearch} placeholder="Inter name..." list="users" onChange={this.onUpdateUserName} value={this.state.value} />
                    <button className={s.addDialogButton} onClick={this.setFoundUser}>Add</button>
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