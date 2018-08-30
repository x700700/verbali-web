import * as types from './actionsTypes';


export const setCurrentPage = currentPage => {
    return {
        type: types.APP_SET_CURRENT_PAGE,
        currentPage: currentPage
    }
};

export const setError = (prefix, errorReason) => {
    const errorMsg = `Error: ${prefix} - ${errorReason}`;
    console.error(errorMsg);
    return {
        type: types.APP_SET_ERROR,
        error: errorMsg
    }
};
export const resetError = () => {
    return {
        type: types.APP_RESET_ERROR,
    }
};
