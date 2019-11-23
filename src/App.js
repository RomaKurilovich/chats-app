import React from 'react';
import './App.css';
import {api} from "./api";
import Header from "./components/header/Header";
import openSocket from 'socket.io-client';
import Chat from "./components/Chat";

class App extends React.Component{

    async componentDidMount() {
        await api.getKey()
            .then(token => localStorage.setItem('token', token));

        const socket = openSocket('http://messenger-hackathon.herokuapp.com');
        socket.on('get-chats-success', chats => {
            console.log(chats)
        });
        socket.emit('get-chats', {token: localStorage.getItem('token')})

        socket.on('get-messages-success', messages => {
            console.log(messages)
        });
        socket.emit('get-messages', {token: localStorage.getItem('token')})
    }

    render(){
    return(
        <div>
            <Header />
            <Chat/>
        </div>
    )
  }
}




export default App
