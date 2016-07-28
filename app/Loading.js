import React, {Component} from 'react'

import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native'

export default class Loading extends Component {
  render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator
              animating={this.props.isLoading}
              style={styles.spinner}
            />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: 50,
  }
});
