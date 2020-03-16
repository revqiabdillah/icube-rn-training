import React, { 
	createContext, 
	useState,
	useReducer,
	useEffect,
	useMemo
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider } from 'react-redux';

import stores from '../stores';

import routes from './routes';

import {
	AUTH_RESTORE_TOKEN,
	AUTH_SIGN_IN,
	AUTH_SIGN_OUT,
	INITIAL_AUTH,
} from '../stores/actions/auth';
import REDUCER_AUTH from '../stores/reducers/auth';
import { Storage } from '../helpers/Storage';

export const AuthContext = createContext();
const Stack = createStackNavigator();

const AuthNavigator = () => {

	const [state, dispatch] = useReducer(REDUCER_AUTH, INITIAL_AUTH);

	useEffect(() => {
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
			let userToken;
			try {
				userToken = await Storage.get(Storage.name.AUTH_DATA);
			} catch (e) {
				// Restoring token failed
			}
	
			dispatch({ type: AUTH_RESTORE_TOKEN, token: userToken });
		};

		bootstrapAsync();
	}, []);

	const authContext = useMemo(() => ({
        signIn: async data => dispatch({ type: AUTH_SIGN_IN, token: 'dummy-auth-token' }),
        signUp: async data => dispatch({ type: AUTH_SIGN_OUT, token: 'dummy-auth-token' }),
        signOut: () => dispatch({ type: AUTH_SIGN_OUT }),
    }), []);

    const appStackScreen = () => {
        return (
            <Stack.Screen name="Home" component={Home} />
        );
    }

    const authStackScreen = () => {

        return (
            <>
                <Stack.Screen
                    name={routes.LANDING.name}
                    component={routes.LANDING.component}
                    options={{
                        title: 'Landing',
                        animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                    }}/>
                <Stack.Screen name={routes.SIGNIN.name} component={routes.SIGNIN.component}/>
                <Stack.Screen name={routes.SIGNUP.name} component={routes.SIGNUP.component}/>
            </>
        );
    }
    
    const rootStackScreen = () => {
        return (
            <>
                { state.userToken === null ? authStackScreen() : appStackScreen() }
            </>
        )
    }

    return (
        <AuthContext.Provider value={authContext}>
            <Provider store={stores}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        { rootStackScreen() }
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </AuthContext.Provider>
    );
}

export default AuthNavigator;