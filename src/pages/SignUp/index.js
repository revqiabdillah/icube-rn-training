import React, { useState } from 'react';
import {
	View,
  	Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import appStyles from '../../styles/app';
import styles from './styles';

import Navbar from '../../components/Navbar';

const SignUp = ({
	navigation
}) => {
  	const { t, i18n } = useTranslation();
    return (
		<View style={[appStyles.container]}>
			<Navbar 
				navigation={navigation}
				title={t('signup')}/>
			<Text>Content</Text>
		</View>
    );
}

export default SignUp;