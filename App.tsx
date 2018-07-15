/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

interface BaseScreenState {
  baseClassContent: string;
}

abstract class BaseScreen<P={}, S={}> extends Component<P, S & BaseScreenState>{

  abstract renderScreen(): any;
  render() {
    return (
      <View>
        <Text>{this.state.baseClassContent}</Text>
        {this.renderScreen()}
      </View>
    );
  }
}

interface State {
  appContent: string;
}
export default class App extends BaseScreen<{}, State> {

  state = {
    baseClassContent: 'Hello',
    appContent: 'This is App class content'
  }

  renderScreen() {
    return (
      <Text>{this.state.appContent}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
