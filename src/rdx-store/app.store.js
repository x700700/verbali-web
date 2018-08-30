import * as types from '../rdx-Actions/actionsTypes';


const appReducer = (  state = {
                          currentPage: '',
                          error: '',
                      },
                      action) => {

    switch (action.type) {

        case types.APP_SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case types.APP_SET_ERROR:
            return {...state, error: action.error};

        case types.APP_RESET_ERROR:
            return {...state, error: null};

        default:
            return state;
    }
};
export default appReducer;
