import React from 'react';
import { WebView } from 'react-native';
import Home from './home.io/index.html'

export default class App extends React.Component {
  render() {
    return (
      <WebView
      source={Home}
      style={{flex: 1}}
    />
    );
  }
}


