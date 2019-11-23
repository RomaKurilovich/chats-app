import React from 'react'
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./messages/Messages";
import s from './Chat.module.css'
import {api} from "../api";
import openSocket from "socket.io-client";
import Header from './header/Header';

class Chat extends React.Component {
    state = {
        dialogs: [],
        messages: [],
        currentDialogId: null,
        writeMeId: null,
        whriteHim: null,
        isTyping: false
    };

    addNewDialogs = (newDialogId) => {

        // this.setState({ dialogs: [...this.state.dialogs, newDialog]})
        const socket = openSocket('http://messenger-hackathon.herokuapp.com', {query: "token=" + localStorage.getItem('token')});
        socket.emit("init-chat", {token: localStorage.getItem('token'), interlocutorId: newDialogId})
        socket.on("init-chat-success", res => {

            this.setState({dialogs: [...this.state.dialogs, res.chat]})
        })
    }
    sendMessage = (text) => {
        const socket = openSocket('http://messenger-hackathon.herokuapp.com', {query: "token=" + localStorage.getItem('token')});
        socket.emit("send-message", {
            token: localStorage.getItem('token'),
            interlocutorId: this.state.currentDialogId,
            body: text
        })
        socket.on("send-message-success", res => {

            this.setState({messages: [...this.state.messages, res.message]})
        })
    }

    setMessages = (id) => {
        this.   socket.emit('get-messages', {token: localStorage.getItem('token'), interlocutorId: id});
        this.socket.on('get-messages-success', res => {
            console.log(res);
            this.setState({messages: res.messages.messages})
        });
    }

    isTyping = (id) => {

        this.socket.emit('write-message', {
            token: localStorage.getItem('token'),
            interlocutorId: this.state.currentDialogId
        });
    };


    async componentDidMount() {
        await api.getKey()
            .then(token => localStorage.setItem('token', token));

        this.socket = openSocket('http://messenger-hackathon.herokuapp.com', {query: "token=" + localStorage.getItem('token')});

        this.socket.emit('get-chats', {token: localStorage.getItem('token')});
        this.socket.on('get-chats-success', res => {
            console.log(res)
            this.setState({dialogs: res.chats})
        })

        // socket.emit('write-message', {token: localStorage.getItem('token'), interlocutorId: this.state.whriteHim});
        this.socket.on('write-message-success', res => {
            debugger
            console.log(res);
            if (res.interlocutorId === this.state.currentDialogId) {
                this.setState({isTyping: true})
                console.log('true is typing')
                clearTimeout(this.tm);
                this.tm = setTimeout(() => {

                    this.setState({isTyping: false})

                }, 1000);
            }

        });


        this.socket.emit('get-messages', {
            token: localStorage.getItem('token'),
            interlocutorId: this.state.currentDialogId
        });
        this.socket.on('get-messages-success', res => {
            console.log(res);
            this.setState({messages: res.messages.messages})
        });
    }

    setCurrentDialogId = (id) => {
        debugger;
        this.setState({currentDialogId: id})
        this.setMessages(id)
    };

    setWriteHim = (id) => {
        this.setState({whriteHim: id})
    }


    render() {
        return (<div><Header addNewDialogs={this.addNewDialogs}/>
                <div className={s.wrapper}>
                    <div><Dialogs setDialogId={this.setCurrentDialogId} dialogs={this.state.dialogs}/></div>
                    <div><Messages isTyping={this.state.isTyping}
                                   currentDialogId={this.state.currentDialogId}
                                   setWriteHim={this.state.setWriteHim}
                                   sendMessage={this.sendMessage}
                                   currentDialogId={this.state.currentDialogId}
                                   messages={this.state.messages}/></div>
                </div>
            </div>

        )
    }
}


export default Chat
