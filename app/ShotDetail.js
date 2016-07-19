import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import NavbarComp from './NavBar'

export default class ShotDetail extends Component {
  constructor(props) {
      super(props)
  }

  render() {
      return (
        <View style={styles.container}>
        <NavbarComp route={this.props.route} navigator={this.props.navigator}/>
          <Text style={styles.welcome}>
            Welcome to SettingsView!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit SettingsView
          </Text>
          <Text style={styles.instructions}>
            SettingsView SettingsView SettingsView
          </Text>
        </View>
      )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
