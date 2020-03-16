import AsyncStorage from '@react-native-community/async-storage';
export const Storage = {
    name: {
        AUTH_DATA: 'AUTH_DATA'
    },
    set: (name, data) => {
        AsyncStorage.setItem(name, data);
    },
    get: (name) => {
        return AsyncStorage.getItem(name);
    },
    del: (name) => {
        AsyncStorage.removeItem(name)
    }
}