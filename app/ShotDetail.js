import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    PixelRatio,
} from 'react-native'

import {fetchResources} from './api';
import NavbarComp from './NavBar';
import Loading from './Loading';

var ParallaxView = require('react-native-parallax-view');
var HTMLView = require('react-native-htmlview');

export default class ShotDetail extends Component {
  constructor(props) {
      super(props)
      this.state = {
        isLoading: true,
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,}),
        }
  }

  componentDidMount() {
    fetchResources(this.props.shot.comments_url).catch((error) => {
    }).then((responseData) => {
      this.setState({
                    isLoading: false,
                    dataSource: this.state.dataSource.cloneWithRows(responseData)
                })
    }).done();
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
            {this._renderCommentsList()}
         </ParallaxView>
        </View>
      )
  }

  _renderCommentsList() {
      if (this.state.isLoading) {
        return (<Loading />);
      } else {
        return (
          <View style={styles.sectionSpacing}>
          <View style={styles.separator} />
          <Text style={styles.heading}>{'  ' + this.props.shot.comments_count + ' Responses'}</Text>
          <View style={styles.separator} />
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            automaticallyAdjustContentInsets={false}
          />
        </View>);
      }
  }

  renderRow(comment) {
    console.log('comment');
    console.log(comment);
    return (
      <View style={styles.commentContainer}>
      <Image source={{uri: comment.user.avatar_url}}
      style={styles.avatar} />
      <View style={styles.commentRithtContainer}>
      <Text style={styles.name}>
      {comment.user.name}
     </Text>
      <Text style={styles.comment}>
       <HTMLView value={comment.body}
       onLinkPress={(url) => console.log('clicked link: ', url)}/>
     </Text>
     </View>
      </View>);
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
    fontWeight: '400',
    color: '#ea4c89',
    lineHeight: 18
  },
  commentContainer: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      borderColor: '#e1e1e1',
      borderBottomWidth: 1,
      alignItems: 'center'
  },
  commentRithtContainer: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
  },
  avatar: {
      backgroundColor: 'gray',
      width: 36,
      height: 36,
      borderRadius: 18,
      marginRight: 6
  },
  name: {
    color: '#333333',
    fontSize: 16,
  },
  comment: {
    color: '#ea4c89',
    fontSize: 13,
    marginRight: 10,
  },
  descriptionStyle: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  separator: {
  height: 1 / PixelRatio.get(),
  },
  sectionSpacing: {
    backgroundColor: '#eeeeee',
  },
  heading: {
    fontWeight: "700",
    fontSize: 16
  }
  });
