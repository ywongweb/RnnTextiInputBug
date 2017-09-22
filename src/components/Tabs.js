import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
var ScrollableTabView = require('react-native-scrollable-tab-view');

class Tabs extends Component {
  render() {
    return <ScrollableTabView
      ref={(tabView) => { this.tabView = tabView; }}
    >
      <Text tabLabel='Tab #1'>My</Text>
      <Text tabLabel='Tab #2'>favorite</Text>
      <Text tabLabel='Tab #3'>project</Text>
      <TouchableOpacity tabLabel='Back' onPress={() => this.tabView.goToPage(0)}>
        <Text>Lets go back!</Text>
      </TouchableOpacity>
    </ScrollableTabView>;
  }
}

export default Tabs;
