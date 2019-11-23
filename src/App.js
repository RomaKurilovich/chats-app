import React from 'react';
import './App.css';
import {api} from "./api";

class App extends React.Component{

    componentDidMount() {
        api.getKey()
            .then(token => localStorage.setItem('token', token))
    }

    render(){
    return(
        <div>
            Hello!
        </div>
    )
  }
}


export default App
