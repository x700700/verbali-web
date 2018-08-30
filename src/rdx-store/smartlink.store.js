import * as types from '../rdx-Actions/actionsTypes';


const smartlinkReducer = (  state = {
                           duringRequest: false,
                           smartlinksList : null,
                       },
                       action) => {

    switch (action.type) {

        case types.SMARTLINK_LIST_REQUEST:
            return {
                ...state,
                duringRequest: true,
                smartlinksList : null,
            };
        case types.SMARTLINK_LIST_RECEIVED:
            return {
                ...state,
                duringRequest: false,
                smartlinksList: action.smartlinksList.data,
            };
        default:
            return state;
    }
};
export default smartlinkReducer;
