import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import Tabs from './Tabs'
import NewTabs from './NewTab'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    borderWidth: 1,
    borderColor: 'red',
  },
  buttonContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
  },
  button: {
    fontSize: 30,
  }
})
class Home extends React.Component {
  render() {
    return (
       <View style={styles.container}>
         <TouchableOpacity onPress={() => this.props.navigator.push({
           screen: 'Second'
         })}>
           <Text style={styles.button}>Push new scene</Text>
         </TouchableOpacity>

         <Tabs />
       </View>
    );
  }
}

export default Home;
