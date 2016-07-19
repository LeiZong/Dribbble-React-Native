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

import HomeView from './Home'
import SettingsView from './Settings'
import ContactsView from './Contacts'

export default class TabBarComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'Home'
        }
    }

    render() {
        return (
            <TabNavigator hidesTabTouch={true} sceneStyle={styles.sceneStyle}>
                {this._renderTabItem('Home', <HomeView navigator={this.props.navigator}/>)}
                {this._renderTabItem('Contacts', <ContactsView navigator={this.props.navigator}/>)}
                {this._renderTabItem('Settings', <SettingsView navigator={this.props.navigator}/>)}
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
        tag = selected ? tag + 'Selected' : tag
        if (selected) {
          return (
            <Icon name="dribbble" size={30} color="#ff9630" />
          )
        }
        return (
          <Icon name="dribbble" size={30} color="#929292" />
        )
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
    },
    tabIcon: {
        fontSize: 28,
        color: '#929292',
    },
    selectedTabIcon: {
        color: '#ff9630'
    }
})
