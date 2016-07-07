import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default class SettingsView extends Component {
  constructor(props) {
      super(props)
  }

  render() {
      return (
        <View style={styles.container}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
