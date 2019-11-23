import React from 'react';
import './App.css';
import {api} from "./api";
import Header from "./components/header/Header";

class App extends React.Component{



    componentDidMount() {
        api.getKey()
            .then(token => localStorage.setItem('token', token))
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
