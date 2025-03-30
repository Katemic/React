import React, { Component } from 'react';
import Message from "./Message";
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App"> 
         <Message messagetext="Local time:"/>
         <Clock />  
      </div>
    );
  }
}

export default App;
