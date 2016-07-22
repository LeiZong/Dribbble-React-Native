import React, {Component} from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableHighlight,
} from 'react-native'

import {fetchResources} from './api'
var GiftedListView = require('react-native-gifted-listview');

export default class BaseListView extends Component {
  render() {
      return (
          <GiftedListView
              enableEmptySections={true}
              customStyles={listStyles}
              rowView={this._renderRowView.bind(this)}
              onFetch={this._onFetch.bind(this)}
              firstLoader={true}
              pagination={true}
              refreshable={true}
              withSections={false}
              spinnerColor={'gray'}
          />
      )
  }

  _onFetch(page = 1, callback, options) {
 }

  _renderRowView(shot) {
       return (
             <View style={styles.tweetContainer}>
                 <TouchableHighlight underlayColor='transparent' onPress={this._gotoUserDetails.bind(this, shot)}>
                 <View style={styles.topContainer}>
                 {shot.team === null ? <Image source={{uri: shot.user.avatar_url}}
                 style={styles.avatar} /> : <Image source={{uri: shot.team.avatar_url}}
                 style={styles.avatar} />}
                 {shot.team === null ?
                   <View style={{justifyContent: 'center'}}>
                     <Text style={styles.name}>{shot.user.name}</Text>
                 </View> :
                 <View style={{justifyContent: 'center'}}>
                     <Text style={styles.name}>{shot.team.name + ' - Team'}</Text>
                 </View>}
                 </View>
                 </TouchableHighlight>
                 <TouchableHighlight underlayColor='transparent' onPress={this._gotoShotDetails.bind(this, shot)}>
                 <View style={styles.middleContainer}>
                     <Image defaultSource={require('../img/dribbble_placeholder.png')}
                     source={{uri: shot.images.normal}}
                     style={{height: shot.height}}/>
                 </View>
                 </TouchableHighlight>
                 <View style={styles.bottomContainer}>
                         <View style={[styles.bottomCell, styles.bottomTool]}>
                             <Image style={{resizeMode: 'cover'}}
                             source={require('../img/visibility_grey.png')} />
                             <Text style={styles.bottomToolText}>{' ' + shot.views_count}</Text>
                         </View>
                         <View style={[styles.bottomCell, styles.bottomTool]}>
                             <Image style={{resizeMode: 'cover'}}
                             source={require('../img/message_grey.png')} />
                             <Text style={styles.bottomToolText}>{' ' + shot.comments_count}</Text>
                         </View>
                         <View style={[styles.bottomCell, styles.bottomTool]}>
                             <Image style={{resizeMode: 'cover'}}
                             source={require('../img/favorite_grey.png')} />
                             <Text style={styles.bottomToolText}>{' ' + shot.likes_count}</Text>
                         </View>
                 </View>
             </View>
       )
   }

  _gotoShotDetails(shot) {
    this.props.navigator.push({
          title: 'Shot',
          id: 'ShotDetail',
          params: {
              shot: shot
          }
      })
  }

  _gotoUserDetails(shot) {
    fetchResources(shot.user.shots_url).catch((error) => {
    })
    .then((responseData) => {
      console.log(responseData);
    }).done();
  }
}

const listStyles = {
  paginationView: {
    backgroundColor: '#eee'
  },
  url: {
    color: '#007aff'
  }
}

const styles = StyleSheet.create({
  tweetContainer: {
    backgroundColor: 'white',
    marginTop: 3,
    marginBottom: 7,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    shadowOffset: {
    height: 2,
    width: 1,
    }
  },
  topContainer: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      borderColor: '#e1e1e1',
      borderBottomWidth: 1,
      alignItems: 'center'
  },
  avatar: {
      backgroundColor: 'gray',
      width: 36,
      height: 36,
      borderRadius: 18,
      marginRight: 6
  },
  name: {
      color: '#ff9630',
      fontWeight: '600',
      fontSize: 14,
  },
  middleContainer: {
      padding: 10,
      borderColor: '#e1e1e1',
      borderBottomWidth: 1
  },
  bottomContainer: {
      flexDirection: 'row',
      height: 40,
      backgroundColor: '#fafafa'
  },
  bottomTool: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  bottomCell: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  bottomToolText: {
      color: '#6D6D78',
      fontWeight: '500',
      alignItems: 'center'
  },
});
