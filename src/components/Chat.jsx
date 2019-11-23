import React from 'react'
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./messages/Messages";
import s from './Chat.module.css'
import { api } from "../api";
import openSocket from "socket.io-client";
import Header from './header/Header';

class Chat extends React.Component {
    state = {
        dialogs: [],
        messages: [],
        currentDialogId: null
    };

    addNewDialogs = (newDialogId) => { 
        debugger   
       // this.setState({ dialogs: [...this.state.dialogs, newDialog]})
       const socket = openSocket('http://messenger-hackathon.herokuapp.com',{ query: "token=" + localStorage.getItem('token')});
        socket.emit("init-chat", {token: localStorage.getItem('token'), interlocutorId: newDialogId})
        socket.on("init-chat-success", res => {
            debugger
            this.setState({dialogs: [...this.state.dialogs, res.chat]})
        })
    }
    sendMessage = ( text) => {
        const socket = openSocket('http://messenger-hackathon.herokuapp.com',{ query: "token=" + localStorage.getItem('token')});
        socket.emit("send-message", {token: localStorage.getItem('token'), interlocutorId: this.state.currentDialogId, body: text})
        socket.on("send-message-success", res => {
            debugger
            this.setState({messages: [...this.state.messages, res.message]})
        })
    }

    async componentDidMount() {
        await api.getKey()
            .then(token => localStorage.setItem('token', token));

        const socket = openSocket('http://messenger-hackathon.herokuapp.com',{ query: "token=" + localStorage.getItem('token')});
        
        socket.emit('get-chats', {token: localStorage.getItem('token')});
        socket.on('get-chats-success', res => {
            console.log(res)
            this.setState({dialogs: res.chats})
        })
        

        socket.emit('get-messages', {token: localStorage.getItem('token')});
        socket.on('get-messages-success', res => {
            console.log(res);
            this.setState({messages: res.messages.messages})
        });
    }

    setCurrentDialogId = (id) => {
        debugger
        this.setState({currentDialogId: id})
    };



    render() {
        return (<div> <Header addNewDialogs={this.addNewDialogs}/>
            <div className={s.wrapper}>
                <div><Dialogs setDialogId={this.setCurrentDialogId} dialogs={this.state.dialogs}/></div>
                <div><Messages sendMessage={this.sendMessage} currentDialogId={this.state.currentDialogId} messages={this.state.messages}/></div>
            </div>
            </div>

        )
    }
}



export default Chat
