import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	TextInput,
	Image,
} from 'react-native';

export default class UserInput extends Component {
	constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        };
	}
	
	onLayout(e) {
		this.setState({
			width: Dimensions.get('window').width,
			height: Dimensions.get('window').height,
		});
	}

	render() {
		var inputStyle = StyleSheet.flatten([
			styles.input,
			{
				backgroundColor: 'rgba(255, 255, 255, 0.4)',
				width: this.state.width - 40,
				height: 40,
				marginHorizontal: 20,
				paddingLeft: 45,
				borderRadius: 20,
				color: '#ffffff',
			}
		  ])
		return (
			<View style={styles.inputWrapper} onLayout={this.onLayout.bind(this)}>
				<Image source={this.props.source}
					style={styles.inlineImg} />
				<TextInput style={inputStyle}
					placeholder={this.props.placeholder}
					secureTextEntry={this.props.secureTextEntry}
					autoCorrect={this.props.autoCorrect}
					autoCapitalize={this.props.autoCapitalize}
					returnKeyType={this.props.returnKeyType}
					onChangeText={this.props.onChangeText}
					value={this.props.value}
					placeholderTextColor='white'
					underlineColorAndroid='transparent' />
			</View>
		);
	}

	
}

UserInput.propTypes = {
	source: PropTypes.number.isRequired,
	placeholder: PropTypes.string.isRequired,
	secureTextEntry: PropTypes.bool,
	autoCorrect: PropTypes.bool,
	autoCapitalize: PropTypes.string,
	returnKeyType: PropTypes.string,
};

const styles = StyleSheet.create({
	inputWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		marginBottom: 20
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 9,
	},
});
