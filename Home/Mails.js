import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, Content,Label, View, Header,Item,Icon,Input,Button, Text} from 'native-base';
import FooterContent from './Footer';


class MailScreen extends Component {
 static navigationOptions = {
    title: 'Mails'
  }
  
render() {
    return (
         <Container>
          <Header>
          <Content>
          <Item>
            <Button onPress={() => this.props.navigation.goBack()}>
            <Icon ios='ios-arrow-round-back' android='md-arrow-back'/>

            </Button>
           <Label style ={{color:'white'}}>Mails</Label>
          </Item>
          
          </Content>
          </Header>
         <View style={{flex:1}}>
    
        </View>
        <FooterContent/>
      </Container>
      
    );
  }
}



export default MailScreen;