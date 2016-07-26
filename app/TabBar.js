import React, {
    Component
} from 'react'

import {
    StyleSheet,
    Text
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/FontAwesome';
import styleUtils from './Styles'

import DefaultShots from './DefaultShotsView'
import DebutsShots from './DebutsShotsView'
import AnimatedShots from './AnimatedShotsView'

export default class TabBarComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'Default'
        }
    }

    render() {
        return (
            <TabNavigator hidesTabTouch={true} sceneStyle={styles.sceneStyle}>
                {this._renderTabItem('Default', <DefaultShots navigator={this.props.navigator}/>)}
                {this._renderTabItem('Animated', <AnimatedShots navigator={this.props.navigator}/>)}
                {this._renderTabItem('Debuts', <DebutsShots navigator={this.props.navigator}/>)}
            </TabNavigator>
        )
    }

    _renderTabItem(tag, childView) {
        return (
            <TabNavigator.Item
                title={tag}
                titleStyle={styles.titleStyle}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderIcon={() => this._renderTabItemIcon(tag)}
                renderSelectedIcon={() => this._renderTabItemIcon(tag, true)}
                selected={this.state.selectedTab === tag}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        )
    }

    _renderTabItemIcon(tag, selected = false) {
      switch (tag) {
        case 'Default':
        return (
          <Icon name="dribbble" size={30} color={selected ? "#ff9630" : "#929292"} />)
          break;
        case 'Animated':
        return (
          <Icon name="glide-g" size={30} color={selected ? "#ff9630" : "#929292"} />)
          break;
        case 'Debuts':
        return (
          <Icon name="anchor" size={30} color={selected ? "#ff9630" : "#929292"} />)
          break;
        default:

      }
    }
}

const styles = StyleSheet.create({
    sceneStyle: {
        ...styleUtils.containerBg,
        flex: 1
    },
    titleStyle: {
        color: '#929292',
        fontSize: 12,
        marginTop: -2
    },
    selectedTitleStyle: {
        color: '#ff9630'
    }
})
