import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Home from './Home/Home';
import UserProfile from './UserProfile/UserProfile';
import Drawer from './Drawer';
import Sidebar from './UserProfile/SideBar';

const SimpleApp = DrawerNavigator({
  Home: {screen: Home}

},
  {
    // passing all route info as props to the custom Sidebar component 
    contentComponent: props => <Sidebar {...props} />
  }
);

const MyApp = StackNavigator({

  Home: {screen: Home}

})

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}



module.exports = App;