import * as types from './actionsTypes';
import consts from '../global/consts';
import { myFetch } from '../utils/myFetch';
import { setError } from './app.actions';


const smartlinksRequest = () => {
    return {
        type: types.SMARTLINK_LIST_REQUEST,
        smartlinksList: null
    }
};
const smartlinksReceived = resp => {
    return {
        type: types.SMARTLINK_LIST_RECEIVED,
        smartlinksList: resp
    }
};

// Todo - can I ahieve 'dispatch' without transfer it as argument??
const smartlinksSucceeded = (dispatch, resp) => {
    dispatch(smartlinksReceived(resp));
};
const smartlinksFailed = (dispatch, err) => {
    dispatch(setError('Get Smartlinks List', err));
    dispatch(smartlinksReceived(err));
};
export const userSmartlinks = (smartlinksInfo) => {
    return (dispatch, getState) => {
        if (getState().duringRequest) return;
        console.log("userSmartlinks: ", smartlinksInfo);
        dispatch(smartlinksRequest());
        myFetch(dispatch, 'GET', `${consts.FFM_CONSOLE_API_URL}/user-smart-link`, null, smartlinksSucceeded, smartlinksFailed);
    }
};
