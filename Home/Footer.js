import React, {Component}  from 'react';
import {Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import {Footer, FooterTab,Input}  from 'native-base';

export default class FooterContent extends Component{


	render(){
		return (
    		<Footer style={{backgroundColor: 'white'}}>
          
             

              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Ask something..."
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onFocus ={this.onInputFocus}
                onChangeText = {this.onInputChange}
        />
               
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={this.onButtonPress}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
        </Footer>

			);

	};
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 50,
      width: 100,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 50,
   },
   submitButtonText:{
      color: 'white'
   }
})