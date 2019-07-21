import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class App extends Component {
  onNavigationStateChange = navState => {
    if (navState.url.indexOf('https:/share-we-go.firebase.com') === 0) {
      const regex = /#access_token=(.+)/;
      let accessToken = navState.url.match(regex)[1];
      console.log(accessToken);
    }
  };
  render() {
    const url = 'https://share-we-go.web.app';
    return (
      <WebView
        source={{
          uri: url,
        }}
        onNavigationStateChange={this.onNavigationStateChange}
        userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
        originWhitelist={['*']}
        startInLoadingState
        thirdPartyCookiesEnabled={true}
        scalesPageToFit
        scrollEnabled
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        geolocationEnabled={true}
        useWebKit={true}
        injectedJavaScript={`
      document.cookie
           .split(";")
           .forEach(function(c) {
               document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";domain=https://share-we-go.web.app");
           });
           
           window.postMessage();

           const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=0.5, maximum-scale=0.5, user-scalable=2.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); 
  `}
      />
    );
  }
}
