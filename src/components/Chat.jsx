import React from 'react'
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./messages/Messages";
import s from './Chat.module.css'
import openSocket from "socket.io-client";

class Chat extends React.Component  {
    state = {
        dialogs: [{
            chatId: '12',
            userID: "123",
            interLocuterId: "125",
            interLocuterName: "Dima",
            interLocuterVisitData: "13:26",
            interLocuterAvatar: {
                small: "",
                large: ""
            },
            newMessageCount: 10,
            lastMessageBody:'hello how are you?',
            lastMessageAuthorId: "125",
            lastMessageData: "13:00",
            lastMessageIsRead: false,
            isHidden: false    
        },
        {
            userID: "123",
            interLocuterId: "125",
            interLocuterName: "Andrey",
            interLocuterVisitData: "13:00",
            interLocuterAvatar: {
                small: "",
                large: ""
            },
            newMessageCount: 10,
            lastMessageBody:'hello',
            lastMessageAuthorId: "125",
            lastMessageData: "13:28",
            lastMessageIsRead: false,
            isHidden: false    
        }],
        messages:[{
            chatId: "12",
            authorId: "123",
            isMessageRead: false,
            date: "12:45",
            status: 'not deleted' ,
            body: 'hello '
        }]
    };
    componentDidMount(){
        const socket = openSocket('http://messenger-hackathon.herokuapp.com');
        socket.on('get-chats-success', chats => {
            console.log(chats)
        });
        socket.emit('get-chats', {token: localStorage.getItem('token')})
            
    }
    setDialogs(){

    }

    render(){
        return (
            <div className={s.wrapper}>
                <div><Dialogs dialogs={this.state.dialogs}/></div>
                <div><Messages messages={this.state.messages}/></div>
            </div>
        )
    }
}


export default Chat