import React, {Component} from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native'

import NavigationBar from 'react-native-navbar'
import Icon from 'react-native-vector-icons/FontAwesome';

function _renderBarButton(text, handler, icon = false, buttonStyle = {}, buttonTextStyle = {}) {
    if(icon) {
      return (
          <TouchableOpacity
              onPress={handler}
              style={[styles.button, buttonStyle]}>
              <Icon name={text} size={30} color="#333333" />
          </TouchableOpacity>
      )
    }
    return (
        <TouchableOpacity
            onPress={handler}
            style={[styles.button, buttonStyle]}>
            <Text>back</Text>
        </TouchableOpacity>
    )
}

export default class NavbarComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    _leftButton() {
        switch (this.props.route.id) {
        case 'main':
            return (<View></View>)
        default:
            return _renderBarButton('angle-left', () => this.props.navigator.pop(), true)
        }
    }

    _rightButton() {
        switch (this.props.route.id) {
        case 'main':
            return (<View></View>)
        case 'ShotDetail':
            return (<View></View>)
        // case 'tweet':
        //     return _renderBarButton('Send', this.props.route.sendTweet, false, {
        //         width: 50,
        //         marginRight: 7
        //     })
        default:
            break
        }
    }

    _title() {
        return (
            <View style={styles.title}>
                <Text style={styles.titleText}>
                {this.props.route.title ? this.props.route.title : 'Bridddle'}
                </Text>
            </View>
        )
    }

    render() {
        let style = {
            paddingTop: Platform.OS === 'android' ? 0 : 20,
            height: Platform.OS === 'android' ? 56 : 64
        }
        return (
            <NavigationBar
                style={[styles.navbar, style]}
                tintColor={'#ea4c89'}
                statusBar={{
                    hidden: true
                }}
                leftButton={this._leftButton()}
                rightButton={this._rightButton()}
                title={this._title()}
            />
        )
    }
}

const styles = StyleSheet.create({
  navbar: {
      alignItems: 'center',
      borderColor: '#e1e1e1',
      borderBottomWidth: 1
  },
  title: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5
  },
  titleText: {
      fontSize: 18,
      color: '#333333',
  },
  button: {
      flex: 1,
      width: 35,
      alignItems: 'center',
      justifyContent: 'center'
  },
})
