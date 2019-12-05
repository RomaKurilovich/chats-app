import React from 'react'
import style from './Header.module.css'
import {usersAPI} from './../../api'

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = { 
            foundUsers: [],
            foundUserId: null,
        }
        
        this.setFoundUser = () => {
            let user = this.state.foundUsers.find((u) => u.name === this.props.value)
            this.props.addNewDialogs(user.id)
        }
        this.updateValue = (e) =>{
            let newValue = e.currentTarget.value;
            this.props.updateValueForDialogs(newValue)
            usersAPI.getUsers(1,10,newValue, this.props.updateFoundDialogs)
        }
    }

    render(){

        return(
            <div className={style.outer}>
                <div className={style.title}>
                     Recent
                </div>
                <div className={style.searchPath}>
                    <div className={style.searchInput}>
                        <input placeholder="Search" onChange={this.updateValue} value={this.props.value}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header