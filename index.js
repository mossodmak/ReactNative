// import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
import Login from './src/components/login';
import App from './App';

// Render it to the device
 AppRegistry.registerComponent('albums', () => App);
