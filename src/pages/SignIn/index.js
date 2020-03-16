import React, { 
	useState, 
	useContext,
	useEffect
} from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { connect } from 'react-redux';
import { AuthContext } from '../../navigations/auth-navigator';

import appStyles from '../../styles/app';
import styles from './styles';

import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar';

const SignIn = ({
		navigation,
	}) => {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

	const { signIn } = useContext(AuthContext);
  	const { t, i18n } = useTranslation();

	useEffect(() => {

	}, []);

	return (
		<View style={[appStyles.container]}>
			<Navbar 
				navigation={navigation}
				title={t('signin')}/>
			<Text>Content</Text>
		</View>
		// <View >
		// 	<TextInput
		// 		placeholder="Username"
		// 		value={username}
		// 		onChangeText={setUsername}
		// 	/>
		// 	<TextInput
		// 		placeholder="Password"
		// 		value={password}
		// 		onChangeText={setPassword}
		// 		secureTextEntry
		// 	/>
		// 	<Button title="Sign in" onPress={() => signIn({ username, password })} />
		// </View>
	);
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, null)(SignIn);