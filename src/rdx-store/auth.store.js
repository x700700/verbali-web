import * as types from '../rdx-Actions/actionsTypes';


const authReducer = (  state = {
                            duringRequest: false,
                            isAuthChecked: false,
                            isLoggedIn : null,
                            userInfo: null,
                       },
                       action) => {

    switch (action.type) {

        case types.AUTH_LOGIN_REQUEST:
            return {
                ...state,
                duringRequest: true,
            };
        case types.AUTH_LOGIN_RECEIVED:
            return {
                ...state,
                duringRequest: false,
                isAuthChecked: true,
                isLoggedIn: action.loggedInAt,
                userInfo: action.userInfo,
            };

        case types.AUTH_AUTH_CHECK_REQUEST:
            return {
                ...state,
                duringRequest: true,
            };
        case types.AUTH_AUTH_CHECK_RECEIVED:
            return {
                ...state,
                duringRequest: false,
                isAuthChecked: true,
                isLoggedIn: action.loggedInAt,
                userInfo: action.userInfo,
            };

        default:
            return state;
    }
};
export default authReducer;

