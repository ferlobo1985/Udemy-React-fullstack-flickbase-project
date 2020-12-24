import {
    GET_ARTICLES,
    ERROR_GLOBAL,
    SUCCESS_GLOBAL
} from '../types';

/////////// articles //////////////

export const getArticles = (articles) => ({
    type: GET_ARTICLES,
    payload: articles
});


/////// notification /////////////

export const errorGlobal = (msg) => ({
    type: ERROR_GLOBAL,
    payload: msg
});

export const successGlobal = (msg) => ({
    type: SUCCESS_GLOBAL,
    payload: msg
});

export const clearNotification = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_NOTIFICATION
        })
    }
}
