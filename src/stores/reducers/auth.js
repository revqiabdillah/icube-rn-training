import {
    AUTH_RESTORE_TOKEN,
    AUTH_SIGN_IN,
    AUTH_SIGN_OUT
} from '../actions/auth';

const REDUCER_AUTH = (prevState, action) => {
    switch (action.type) {
        case AUTH_RESTORE_TOKEN:
            return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
            };
        case AUTH_SIGN_IN:
            return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
            };
        case AUTH_SIGN_OUT:
            return {
                ...prevState,
                isSignout: true,
                userToken: null,
            };
    }
}

export default REDUCER_AUTH;