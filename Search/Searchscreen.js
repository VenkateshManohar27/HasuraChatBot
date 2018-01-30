import React, { Component } from 'react';
import { Container,View, Header, Item, Input, Icon, Button, Text } from 'native-base';
import FooterContent from '../Home/Footer';

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search Twitter',
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Button onPress={() => this.props.navigation.goBack()}>
            <Icon ios='ios-arrow-round-back' android='md-arrow-back'/>

            </Button>
            <Icon name="ios-search" />
            <Input placeholder="Search Twitter" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
         <View style={{flex:1}}>
    
        </View>
        <FooterContent/>
      </Container>
    );
  }
}