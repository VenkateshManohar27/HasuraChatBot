import React, {Component}  from 'react';
import {ScrollView, TouchableOpacity, TextInput, StyleSheet  } from 'react-native'; 

import { Container, Header, Footer, Title, Card, Segment, CardItem, Content, Button, Left, Right, Body, Icon, Text, Thumbnail, View,Fab } from 'native-base';
import TimeLineCards from '../Card/timelineCards';
import Tabs from './Tabs';
import FooterContent from './Footer';

export default class Home extends Component{
  constructor() {
    super();
    this.messages = [];
    this.state = {
      active: false,
      inputText:''
    };

      this.onInputFocus = this.onInputFocus.bind(this);
      this.onButtonPress = this.onButtonPress.bind(this);
      this.setContentRef = this.setContentRef.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
  }

  onInputFocus() {
    setTimeout(() => {
      this.scrollView.scrollToEnd();
    }, 100);
  }
  onInputChange (text)  {
      this.setState({ inputText: text })
   }

  onButtonPress() {
    this.messages.push(this.state.inputText);
    this.setState({ inputText: '' });
    console.log(this.messages);
  }

  setContentRef(c) {
    this.scrollView = c;
  }


  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'black'}}>
          <Left/>
          <Body>
            <Title>Online Store</Title>
          </Body>
          <Right />
        </Header>
        
        <Content>
          <ScrollView  ref={this.setContentRef}>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>

          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          <Text >Scroll me plz</Text>
          </ScrollView>
           
        </Content>
        
       
         <Footer style={styles.container}>
          
             

              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Ask something..."
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onFocus ={this.onInputFocus}
                onChangeText = {this.onInputChange}
        value={this.state.inputText}
        onSubmitEditing={ this.handleSendMessage }/>
               
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={this.onButtonPress}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     
      backgroundColor: 'white'
   },
   input: {
      
      width:300,
      borderColor: 'black',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: 'black',
      padding: 10,
      width:100
      
   },
   submitButtonText:{
      color: 'white'
   }
})

module.exports = Home;