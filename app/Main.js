import React, { Component } from 'react';

import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

var api = require("./api");

class Main extends Component {
	_openPage() {
		api.getShotsByType('string', 1)
      .catch((error) => {

      })
      .then((responseData) => {
				console.log('111111111');
				console.log(responseData);
      }).done();

			api.getResources('https://api.dribbble.com/v1/users/566203/shots')
			.catch((error) => {

      })
			.then((responseData) => {
				console.log('2222222222');
				console.log(responseData);
    }).done();

	}

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
				<Text>Splash Page</Text>
				<TouchableOpacity onPress={this._openPage.bind(this)}>
					<Text style={{ color: '#55ACEE' }}>Open New Page</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Main;
