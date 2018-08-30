import * as types from './actionsTypes';
import consts from '../global/consts';
import { myFetch } from '../utils/myFetch';
import { setError } from './app.actions';


const loginRequest = () => {
    return {
        type: types.AUTH_LOGIN_REQUEST,
        loggedInAt: null
    }
};
const loginReceived = resp => {
    return {
        type: types.AUTH_LOGIN_RECEIVED,
        loggedInAt: resp && resp.uuid? Date.now() : null,
        userInfo: resp && resp.uuid? resp : null,
    }
};
const loginSucceeded = (dispatch, resp) => {
    dispatch(loginReceived(resp));
};
const loginFailed = (dispatch, err) => {
    dispatch(setError('Sign In', err));
    dispatch(loginReceived(err));
};
export const userLogin = (loginInfo) => {
    return (dispatch, getState) => {
        if (getState().duringRequest) return; // Todo - Check this mechanism works properly (no hang...)
        console.log("userLogin: ", loginInfo);
        dispatch(loginRequest());
        myFetch(dispatch, 'POST', `${consts.FFM_CONSOLE_API_URL}/login`, loginInfo, loginSucceeded, loginFailed);
    }
};



const authRequest = () => {
    return {
        type: types.AUTH_AUTH_CHECK_REQUEST,
        loggedInAt: null
    }
};
const authReceived = resp => {
    return {
        type: types.AUTH_AUTH_CHECK_RECEIVED,
        loggedInAt: resp && resp.uuid? Date.now() : null,
        userInfo: resp && resp.uuid? resp : null,
    }
};
const authSucceeded = (dispatch, resp) => {
    dispatch(authReceived(resp));
};
const authFailed = (dispatch, err) => {
    dispatch(setError('Auth check', err));
    dispatch(authReceived(err));
};
export const userAuthCheck = (authInfo) => {
    return (dispatch, getState) => {
        if (getState().duringRequest) return;
        dispatch(authRequest());
        myFetch(dispatch, 'GET', `${consts.FFM_CONSOLE_API_URL}/auth`, null, authSucceeded, authFailed);
    }
};
