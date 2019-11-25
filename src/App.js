import React from 'react';
import './App.css';
import {api} from "./api";
import Header from "./components/header/Header";
import openSocket from 'socket.io-client';
import Chat from "./components/Chat";

class App extends React.Component{
    render(){
    return(
        <div>
            <Chat/>
        </div>
    )
  }
}




export default App
