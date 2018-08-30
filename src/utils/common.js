// import cookie from 'react-cookies'
import _ from 'lodash';
import { setError } from '../rdx-Actions/app.actions';


export const itemValid = item => {
    return (item && item.id !== undefined && Number.isInteger(item.id) && item.id > 0);
};
export const Dict1stItem = dict => {
    let item = null;
    if (dict !== null) {
        item = _.map(dict)[0];
    }
    return item;
};
export const ItemToDict = item => {
    const dict = {};
    if (item !== null && item.id !== undefined /* && item.id > 0 */) {
        dict[item.id] = item;
    }
    return dict;
};

// =============================================================================================
export const validateId = (dispatch, id, url) => {
    if (id <= 0) {
        // Todo - can I ahieve 'dispatch' without transfer it as argument??
        dispatch(setError(`${url} - error - invalid id=[${id}]`));
        return false;
    }
    return true;
};

// =============================================================================================
