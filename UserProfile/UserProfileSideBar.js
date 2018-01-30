import React from "react";
import { Image, StatusBar, Settings } from "react-native";
import {
 
  Container,  Content 
} from "native-base";

//route name and icon as needs to be shown on the side bar 
const routes = [{name: "Profile",icon: 'contact'},{name: "Lists", icon: 'list-box'},{name: "Moments",icon: 'thunderstorm'}, {name: 'Highlights',icon:'pricetags'} ];
let userdetails='';

export default class UserProfileSideBar extends React.Component {
 
  render() {
        return (
            
                <Content>

                   
                </Content>
        
        );
    }
}