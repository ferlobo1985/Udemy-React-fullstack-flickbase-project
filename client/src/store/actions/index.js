import {
    GET_ARTICLES,
    GET_ARTICLE,
    ADD_ARTICLE,
    CLEAR_CURRENT_ARTICLE,
    ERROR_GLOBAL,
    SUCCESS_GLOBAL,
    CLEAR_NOTIFICATION,
    AUTH_USER,
    SIGN_OUT,
    SITE_LAYOUT
} from '../types';

/////////// articles //////////////


export const addArticle = (article) => ({
    type:ADD_ARTICLE,
    payload:article
})

export const getArticles = (articles) => ({
    type: GET_ARTICLES,
    payload: articles
});

export const getArticle = (article) => ({
    type: GET_ARTICLE,
    payload: article
})


export const clearCurrentArticle = () => ({
    type: CLEAR_CURRENT_ARTICLE
})


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

/////// notification /////////////

export const authUser = (user) => ({
    type: AUTH_USER,
    payload: user
});

export const signOut = () => ({
    type:SIGN_OUT,

})


/////// site /////////////

export const appLayout = (layout) => ({
    type:SITE_LAYOUT,
    payload: layout
})
