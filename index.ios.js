import React, { Component } from 'react'

import {
    Navigator,
    StyleSheet,
    AppRegistry,
    View
} from 'react-native'

import MainView from './app/Main'
import ShotDetail from './app/ShotDetail'

export default class NavigatorComp extends Component {
  render() {
      return (
          <View style={styles.container}>
              <Navigator
                  initialRoute={{name: 'MainView', index: 0, id: 'main'}}
                  configureScene={this._configureScene}
                  renderScene={this._renderScene}
              />
          </View>
      )
  }

  _renderScene(route, navigator) {
      switch (route.id) {
      case 'main':
          return (
              <MainView navigator={navigator} route={route}/>
          )
      case 'ShotDetail':
          return (
                <ShotDetail {...route.params} navigator={navigator} route={route}/>
            )
      default:
          break
      }
  }

  _configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

AppRegistry.registerComponent('Bridddle', () => NavigatorComp);
