import React from 'react';
import ChatView from './ChatView';
import { Container, Header,  Title,  Button, Left, Right, Body } from 'native-base';
import CONST from './Globals';


export default class ChatClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
   {/* this.pusher = new Pusher(pusherConfig.key, pusherConfig);

    this.chatChannel = this.pusher.subscribe('chat_channel');
    this.chatChannel.bind('pusher:subscription_succeeded', () => {
      this.chatChannel.bind('join', (data) => {
        this.handleJoin(data.name);
      });
      this.chatChannel.bind('part', (data) => {
        this.handlePart(data.name);
      });
      this.chatChannel.bind('message', (data) => {
        this.handleMessage(data.name, data.message);
      });
    });*/}

    this.handleSendMessage = this.onSendMessage.bind(this);
  }

  handleJoin(name) {
    const messages = this.state.messages.slice();
    messages.push({action: 'join', name: name});
    this.setState({
      messages: messages
    });
  }
  handlePart(name) {
    const messages = this.state.messages.slice();
    messages.push({action: 'part', name: name});
    this.setState({
      messages: messages
    });
  }
  handleMessage(name, message, type) {
    const messages = this.state.messages;
    messages.push({action: 'message', name: name, message: message, type: type});
    this.setState({
      messages: messages
    });

    console.log(messages);
  }

  

  onSendMessage(text) {
    const payload = {
        message: text
    };
    console.log(this.props);
    this.handleMessage(this.props.name, text, CONST.MSG_TYPE.REQUEST);


    this.handleMessage('Bot', 'Recieved Messages!!', CONST.MSG_TYPE.RESPONSE);
    

    {/*fetch(`${pusherConfig.restServer}/users/${this.props.name}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });*/}
  }

  render() {
    const messages = this.state.messages;

    return (
       <Container>
        <Header style={{backgroundColor: 'black'}}>
          <Left/>
          <Body>
            <Title>Online Store</Title>
          </Body>
          <Right />
        </Header>
        
        <ChatView messages={ messages } onSendMessage={ this.handleSendMessage } />
        
         
      </Container>
    );
  }
}
