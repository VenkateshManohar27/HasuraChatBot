import React, { Component } from 'react';
import {
  Text,View, StyleSheet
} from 'react-native';


import {Content, Header,Left, Body, Right, Button, Icon, Title, List, ListItem, Separator, Footer,FooterTab, Thumbnail} from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
          <Content style={{backgroundColor:'#FFFFFF'}}>
            <Header style={{backgroundColor:'#FFFFFF'}}>
          <Left>
          <Thumbnail source={require('../assets/dp.png')} />
          </Left>
          <Body/>
          <Right/>

        </Header>
        <Content>
        	<Text style={styles.Username}> Venkatesh Manohar</Text>
        	<Text> @Venkatesh_Manohar</Text>
        	<View style={{flex: 1, flexDirection: 'row'}}>
        		<Text style={styles.boldFont}>690 </Text> 
            <Text>Following </Text>
        		<Text style={styles.boldFont}> 653 </Text> 
            <Text>Followers </Text>
        	</View>
        </Content>
        <Content>
           <List>
            <ListItem >
              <Left>
                <Icon ios='ios-person-outline' android='md-person' />
              </Left>
              <Body>
                <Text style={styles.listItemFont}> Profile</Text>
              </Body>
              <Right/>
            </ListItem>
            <ListItem>
              <Left>
                <Icon ios='ios-list-box-outline' android='md-list-box' />
              </Left>
              <Body>
                <Text style={styles.listItemFont}> Lists</Text>
              </Body>
              <Right/>
            </ListItem>
           	<ListItem>
           	  <Left>
                <Icon name='flash' />
              </Left>
              <Body>
                <Text style={styles.listItemFont}> Moments</Text>
              </Body>
              <Right/>
            </ListItem>
            <ListItem>
            	<Left>
                <Icon ios="ios-photos" android='md-photos'/>
              </Left>
              <Body>
                <Text style={styles.listItemFont}> Highlights</Text>
              </Body>
              <Right/>
            </ListItem>
            <Separator/>
             <ListItem>
              <Text style={styles.listItemFont}>Settings and Privacy</Text>
            </ListItem>
            <ListItem>
              <Text style={styles.listItemFont}>Help Centre</Text>
            </ListItem>
          </List>
        </Content>
        <Footer>
        	<FooterTab style={{backgroundColor:'#FFFFFF'}}>
            <Button>
              <Icon ios="ios-moon-outline" android='md-moon'/>
            </Button>
            <Button>
              <Icon ios="ios-apps" android='md-apps'/>
            </Button>
          </FooterTab>
        </Footer>
          </Content>
    );
  }
}

const styles = StyleSheet.create({
  Username: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  boldFont: {
    color: 'black',
    fontWeight: 'bold'
  },
  listItemFont: {
    color: 'black',
    fontSize: 18,
  }
});

module.exports = Sidebar;