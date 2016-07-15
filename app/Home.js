import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
    Dimensions,
    TouchableHighlight,
} from 'react-native'

var Screen = Dimensions.get('window');
var GiftedListView = require('react-native-gifted-listview');
import {fetDefaultShots, fetDebutsShots} from './api.js'

export default class HomeView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      let color = 'gray'
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
                spinnerColor={color}
            />
        )
    }

    _onFetch(page = 1, callback, options) {
      fetDefaultShots(page).catch((error) => {
      })
      .then((responseData) => {
        callback(responseData)
      }).done();
   }

    _renderRowView(info) {
         return (
                 <TouchableHighlight underlayColor='transparent' onPress={this._gotoDetails.bind(this, info)}>
                     <View style={styles.tweetContainer}>
                         <View style={styles.topContainer}>
                             <Image source={{uri: info.user.avatar_url}}
                             style={styles.avatar} />
                             <View style={{justifyContent: 'center'}}>
                                 <Text style={styles.name}>{info.user.name}</Text>
                             </View>
                         </View>
                         <View style={styles.middleContainer}>
                             <Image source={{uri: info.images.normal}}
                             style={{height: info.height}}/>
                         </View>
                         <View style={styles.bottomContainer}>
                                 <View style={[styles.bottomCell, styles.bottomTool]}>
                                     <Image style={{resizeMode: 'cover'}}
                                     source={require('../img/visibility_grey.png')} />
                                     <Text style={styles.bottomToolText}>{' ' + info.views_count}</Text>
                                 </View>
                                 <View style={[styles.bottomCell, styles.bottomTool]}>
                                     <Image style={{resizeMode: 'cover'}}
                                     source={require('../img/message_grey.png')} />
                                     <Text style={styles.bottomToolText}>{' ' + info.comments_count}</Text>
                                 </View>
                                 <View style={[styles.bottomCell, styles.bottomTool]}>
                                     <Image style={{resizeMode: 'cover'}}
                                     source={require('../img/favorite_grey.png')} />
                                     <Text style={styles.bottomToolText}>{' ' + info.likes_count}</Text>
                                 </View>
                         </View>
                     </View>
                 </TouchableHighlight>
         )
     }

    _gotoDetails(tweet) {
      console.log('goto detail');
    }
}

const listStyles = {
  paginationView: {
    backgroundColor: '#eee',
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
