import {
    GET_ARTICLES,
    GET_ARTICLE,
    ADD_ARTICLE,
    GET_ADMIN_ARTICLES,
    UPDATE_ARTICLE_STATUS,
    CLEAR_CURRENT_ARTICLE,
    ERROR_GLOBAL,
    SUCCESS_GLOBAL,
    CLEAR_NOTIFICATION,
    REMOVE_ARTICLE,
    AUTH_USER,
    SIGN_OUT,
    SITE_LAYOUT,
    CHANGE_USER_EMAIL,
    UPDATE_USER_PROFILE
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

export const getPaginateArticles = (articles) => ({
    type: GET_ADMIN_ARTICLES,
    payload: articles
})

export const updateArticleStatus = (articles) => ({
    type:UPDATE_ARTICLE_STATUS,
    payload: articles
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

export const removeArticle = () => ({
    type:REMOVE_ARTICLE
})



/////// users /////////////

export const authUser = (user) => ({
    type: AUTH_USER,
    payload: user
});

export const signOut = () => ({
    type:SIGN_OUT,
})


export const changeUserEmail = (data) => ({
    type: CHANGE_USER_EMAIL,
    payload: data
})

export const updateUserProfile = (userdata) => ({
    type: UPDATE_USER_PROFILE,
    payload: userdata
})

/////// site /////////////

export const appLayout = (layout) => ({
    type:SITE_LAYOUT,
    payload: layout
})
