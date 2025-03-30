
import React, { Component } from 'react';
class Message extends Component {
    render(props) {
      return (
        <div className="Message"> 
          <h1>{this.props.messagetext}</h1> 
        </div> 
      );
    }
  }

export default Message;