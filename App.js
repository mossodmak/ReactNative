import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import Login from './src/components/login';
import styled from 'styled-components';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.blackground}>
        <View style={styles.container}>
          <Text> Logo Icon </Text>
          <Text> ORDER KING </Text>
        </View>
        <View style={{flex:1, paddingHorizontal:2 }}>
          <Login />
        </View>
        <View style={{flex:1}}>
          <Login />
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  blackground: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    
  },
});
