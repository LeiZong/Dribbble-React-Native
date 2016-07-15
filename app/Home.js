import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
    TouchableHighlight,
} from 'react-native'

var GiftedListView = require('react-native-gifted-listview');
import {fetDefaultShots, fetDebutsShots} from './api.js'

export default class HomeView extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     infos: []
        // }
    }

    render() {
      // let shot;
      //
      // fetDefaultShots(0).catch((error) => {
      // })
      // .then((responseData) => {
      //   console.log('111111111');
      //   console.log(responseData);
      //   shot = responseData[0];
      //   console.log(shot.user.avatar_url);
      // }).done();
      // let info = {
      //   avatar: "5",
      //   created_at: "1404784104",
      //   id: "48",
      //   nickname: "Nicole Sobon",
      //   original_pic: "",
      //   text: "Sometimes the hardest part isn't letting go, but rather, learning to start over.",
      // };
      //   return (
      //     <View style={styles.container}>
      //       <TouchableHighlight underlayColor='transparent' onPress={this._gotoDetails.bind(this, info)}>
      //           <View style={styles.tweetContainer}>
      //               <View style={styles.topContainer}>
      //                   <Image source={{uri: this._getAvatarUrl(info.avatar)}} style={styles.avatar} />
      //                   <View>
      //                       <View style={styles.userContainer}>
      //                           <Text style={styles.name}>{info.nickname}</Text>
      //                           <Text style={styles.time}>{'#' + info.id + ' '} </Text>
      //                       </View>
      //                   </View>
      //               </View>
      //               <View style={styles.middleContainer}>
      //                   <Text>{info.text}</Text>
      //                   {this._renderMsgImage(info)}
      //               </View>
      //               <View style={styles.bottomContainer}>
      //                   <TouchableHighlight style={styles.bottomTool}>
      //                       <Text style={styles.bottomToolText}>Forward</Text>
      //                   </TouchableHighlight>
      //                   <TouchableHighlight style={styles.bottomTool}>
      //                       <Text style={styles.bottomToolText}>Comment</Text>
      //                   </TouchableHighlight>
      //                   <TouchableHighlight style={styles.bottomTool}>
      //                       <Text style={styles.bottomToolText}>Like</Text>
      //                   </TouchableHighlight>
      //               </View>
      //           </View>
      //       </TouchableHighlight>
      //     </View>
      //   )
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
      let info = {
        avatar: "5",
        created_at: "1404784104",
        id: "48",
        nickname: "Nicole Sobon",
        original_pic: "",
        text: "Sometimes the hardest part isn't letting go, but rather, learning to start over.",
      };
            // if(page === 1 && options.firstLoad) {
            //   callback(info)
            // } else if(page === 1 && !options.firstLoad) {
            //   callback(info)
            // } else {
            //   callback(info)
            // }
      fetDefaultShots(page).catch((error) => {
      })
      .then((responseData) => {
        console.log(responseData);
        console.log('name == ' + responseData[0].user.name);
        console.log('avatar_url == ' + responseData[0].user.avatar_url);
        console.log("title == " + responseData[0].title);
        console.log('description == ' + responseData[0].description);
        console.log('animated == ' + responseData[0].animated);
        console.log('normal == ' + responseData[0].images.normal);
        console.log('teaser == ' + responseData[0].images.teaser);
        console.log('views_count == ' + responseData[0].views_count);
        console.log('comment_count == ' + responseData[0].comment_count);
        console.log('likes_count == ' + responseData[0].likes_count);
      }).done();

      if(page === 1 && options.firstLoad) {
        callback([info, info, info, info, info])
      } else if (page === 1 && !options.firstLoad) {
        callback([info, info, info, info, info])
      } else {
        callback([info, info, info, info, info], {
                        allLoaded: true
                    })
      }
      // if (page === 3) {
      //   callback(info, {allLoaded: true})
      // } else {
      //   console.log('refresh');
      //   fetDebutsShots(page).catch((error) => {
      //   })
      //   .then((responseData) => {
      //     console.log(responseData);
      //     console.log(page);
      //     callback(info, {allLoaded: false});
      //   }).done();
      // }
   }

   _renderRowView(info) {
        return (
                <TouchableHighlight underlayColor='transparent' onPress={this._gotoDetails.bind(this, info)}>
                    <View style={styles.tweetContainer}>
                        <View style={styles.topContainer}>
                            <Image source={{uri: this._getAvatarUrl(info.avatar)}} style={styles.avatar} />
                            <View>
                                <View style={styles.userContainer}>
                                    <Text style={styles.name}>{info.nickname}</Text>
                                    <Text style={styles.time}>{'#' + info.id + ' '} </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.middleContainer}>
                            <Text>{info.text}</Text>
                            {this._renderMsgImage(info)}
                        </View>
                        <View style={styles.bottomContainer}>
                            <TouchableHighlight style={styles.bottomTool}>
                                <Text style={styles.bottomToolText}>Forward</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.bottomTool}>
                                <Text style={styles.bottomToolText}>Comment</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.bottomTool}>
                                <Text style={styles.bottomToolText}>Like</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </TouchableHighlight>
        )
    }

    _renderMsgImage(info) {
            if(info.original_pic) {
                return (
                    <Image source={{uri: info.original_pic}} style={[styles.msgImage, { resizeMode: Image.resizeMode.cover }]} />
                )
            }
        }

    _getAvatarUrl(ID) {
        return 'http://lorempixel.com/68/68/people/' + ID
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
  tweetContainer: {
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 0,
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    shadowOffset: {
    height: 2,
    width: 1
    }
  },
  topContainer: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      borderColor: '#e1e1e1',
      borderBottomWidth: 1
  },
  avatar: {
      backgroundColor: 'gray',
      width: 35,
      height: 35,
      borderRadius: 4,
      marginRight: 6
  },
  time: {
      fontSize: 13,
      color: '#8999a5',
      marginTop: 2
  },
  name: {
      color: '#ff9630',
      fontWeight: '600',
      fontSize: 14
  },
  middleContainer: {
      padding: 10,
      borderColor: '#e1e1e1',
      borderBottomWidth: 1
  },
  msgImage: {
      flex: 1,
      marginTop: 10,
      height: 200,
      backgroundColor: '#e1e1e1'
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
  bottomToolText: {
      color: '#6D6D78',
      fontWeight: '500',
      alignItems: 'center'
  },
});
