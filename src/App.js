import React from 'react';
import './App.css';
import {api} from "./api";
import Header from "./components/header/Header";
import openSocket from 'socket.io-client'

class App extends React.Component{



    componentDidMount() {
        api.getKey()
            .then(token => localStorage.setItem('token', token));

        const socket = openSocket('http://messenger-hackathon.herocuapp.com')
            socket.on('get-chats-success', (chat => {
                debugger
            }))
    }

    render(){
    return(
        <div>
            <Header />
        </div>
    )
  }
}


export default App
