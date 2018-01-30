import React, { Component } from 'react';
import {
  Text,Image
} from 'react-native';

import {Container,Header,Left,Button,Icon,Right,Body,Title, Content, Card, CardItem, Thumbnail} from 'native-base';




export default class TimeLineCards extends Component {
	render (){
		return(
	<Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/android-marshmallow.png')} />
                <Body>
                  <Text>Venkatesh Manohar @Venkatesh_Manohar - 24m</Text>
                  <Text note>What do you want to do?</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../assets/images.jpg')} style={{height: 200, width: 200, flex: 1}}/>
              </Body>
            </CardItem>
            <CardItem>
              <Button small  transparent>
                 <Icon name="text" />
                 <Text >60</Text>
               </Button>

             <Button small  transparent>
                <Icon name="git-compare" />
                <Text  >2</Text>
              </Button>

               <Button small  transparent>
                 <Icon name="heart" />
                 <Text >19</Text>
               </Button>

               <Button default small transparent>
                 <Icon name="mail" />
                 </Button>
            </CardItem>
          </Card>
        </Content>
        );
	}
}