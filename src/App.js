/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { 
	createContext, 
	useState,
	useReducer,
	useEffect,
	useMemo
} from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Modal,
  TouchableHighlight,
  Alert
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthNavigator from './navigations/auth-navigator';
import 'react-native-gesture-handler';

import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

import en from './languages/en.json';
import id from './languages/id.json';

const languageDetector = {
	type: 'languageDetector',
	async: true,
	detect: cb => cb('en'),
	init: () => {},
	cacheUserLanguage: () => {},
};

i18next
	.use(languageDetector)
	.use(initReactI18next)
	.init({
	fallbackLng: 'en',
	debug: true,
	resources: {
		en: en,
		id: id,
	},
});

const App = () => {
	return (
		<SafeAreaProvider>
			<AuthNavigator />
		</SafeAreaProvider>
	);
};

export default App;
