import React from 'react';
import { WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    const url = 'https://error-404-team.github.io/share-to-go-ui/';
    return (
      <WebView
      source={{
        uri: url,
      }}
      startInLoadingState
      scalesPageToFit
      javaScriptEnabled
      style={{ flex: 1 }}
    />
    );
  }
}


