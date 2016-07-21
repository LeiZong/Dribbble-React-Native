import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

import NavbarComp from './NavBar'
var ParallaxView = require('react-native-parallax-view');
var HTMLView = require('react-native-htmlview');

export default class ShotDetail extends Component {
  constructor(props) {
      super(props)
  }

  render() {
      return (
        <View style={styles.container}>
        <NavbarComp route={this.props.route} navigator={this.props.navigator}/>
        <ParallaxView
             backgroundSource={{ uri: this.props.shot.images.normal }}
             windowHeight={this.props.shot.height}>
           <View style={styles.loremBody}>
             <Text style={styles.titleStyle}>
               {this.props.shot.title}
             </Text>
             <Text style={styles.descriptionStyle}>
              <HTMLView value={this.props.shot.description}
              onLinkPress={(url) => console.log('clicked link: ', url)}/>
            </Text>
           </View>
         </ParallaxView>
        </View>
      )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: "400",
    color: "#ea4c89",
    lineHeight: 18
  },
  descriptionStyle: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
