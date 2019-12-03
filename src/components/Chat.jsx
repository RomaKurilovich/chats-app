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
        foundDialogs: [],
        messages: [],
        currentDialogId: null,
        writeMeId: null,
        whriteHim: null,
        isTyping: false,
        interlocuterPhoto: '',
        interlocutorName: '',
    };

    addNewDialogs = (newDialogId) => {debugger
        // this.setState({ dialogs: [...this.state.dialogs, newDialog]})
        const socket = openSocket('http://messenger-hackathon.herokuapp.com', {query: "token=" + localStorage.getItem('token')});
        socket.emit("init-chat", {token: localStorage.getItem('token'), interlocutorId: newDialogId})
        socket.on("init-chat-success", res => { 
            this.setState({dialogs: [res.chat , ...this.state.dialogs ]})
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
        this.socket.emit('get-messages', {token: localStorage.getItem('token'), interlocutorId: id});
        this.socket.on('get-messages-success', res => { debugger
            this.setState({messages: res.messages.messages})
        });
    }

    isTypingF = () => {

        this.socket.emit('write-message', {
            token: localStorage.getItem('token'),
            interlocutorId: this.state.currentDialogId
        });
    };

    updateFoundDialogs = (data) => {
        this.setState({ foundDialogs: data})
        debugger
    }


    async componentDidMount() {
        await api.getKey()
            .then(token => localStorage.setItem('token', token));

        this.socket = openSocket('http://messenger-hackathon.herokuapp.com', {query: "token=" + localStorage.getItem('token')});

        this.socket.emit('get-chats', {token: localStorage.getItem('token')});
        this.socket.on('get-chats-success', res => {
            this.setState({dialogs: res.chats})
        })

        // socket.emit('write-message', {token: localStorage.getItem('token'), interlocutorId: this.state.whriteHim});
        this.socket.on('write-message-success', res => {
            if (res.interlocutorId === this.state.currentDialogId) {
                this.setState({isTyping: true})
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
            this.setState({messages: res.messages.messages})
        });
    }

    setCurrentDialogId = (id) => {
        this.setState({currentDialogId: id})
        this.setMessages(id)
    };
    setInterlocuterPhoto = (url) => {debugger
        this.setState({interlocuterPhoto: url})
    }
    setInterlocuterName = (name) => {
        this.setState({interlocuterName: name})
    }

    setWriteHim = (id) => {
        this.setState({whriteHim: id})
    }


    render() {
        return (<div>{/*<Header addNewDialogs={this.addNewDialogs}/>*/}
                <div className={s.wrapper}>

                    <div><Dialogs setDialogId={this.setCurrentDialogId}
                     dialogs={this.state.dialogs} 
                     foundDialogs={this.state.foundDialogs}
                     setInterlocuterName={this.setInterlocuterName}
                     setInterlocuterPhoto={this.setInterlocuterPhoto}
                     updateFoundDialogs={this.updateFoundDialogs}
                     addNewDialogs={this.addNewDialogs}
                     /></div>

                    <div><Messages isTyping={this.state.isTyping}
                    isTypingF={this.isTypingF}
                                   currentDialogId={this.state.currentDialogId}
                                   setWriteHim={this.state.setWriteHim}
                                   sendMessage={this.sendMessage}
                                   currentDialogId={this.state.currentDialogId}
                                   messages={this.state.messages}
                                   interlocutorName={this.state.interlocutorName}
                                   interlocuterPhoto={this.state.interlocuterPhoto}
                                   /></div>
                </div>
            </div>

        )
    }
}


export default Chat
