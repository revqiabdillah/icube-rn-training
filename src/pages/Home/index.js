import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { AuthContext } from '../../navigations/auth-navigator';

const Home = () => {
    const { signOut } = useContext(AuthContext);
    return (
		<View>
			<Text>Signed in!</Text>
			<Button title="Sign out" onPress={signOut} />
		</View>
    );
}

export default Home;